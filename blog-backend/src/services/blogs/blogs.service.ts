import { Injectable } from '@nestjs/common';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { AssemblyAiService } from '../assembly-ai/assembly-ai.service';
import { BlogsRepository } from 'src/repositories/blogs/blogs.repository';
import { TranslationService } from '../translation/translation.service';

@Injectable()
export class BlogsService {
    constructor(
        private readonly assemblyAiService: AssemblyAiService,
        private readonly translationService: TranslationService,
        private readonly blogsRepository: BlogsRepository,
    ) { }

    private async convertVideoToAudio(videoPath: string, outputAudioPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            ffmpeg(videoPath)
                .audioCodec('pcm_s16le') // Uncompressed audio format (WAV)
                .audioChannels(1) // Mono audio channel
                .audioFrequency(16000) // 16kHz audio frequency (Google Speech API prefers this)
                .format('wav') // Output format (WAV)
                .on('end', () => {
                    resolve();
                })
                .on('error', (err) => {
                    reject(`Error converting video to audio: ${err}`);
                })
                .save(outputAudioPath); // Save the output as a .wav file
        });
    }

    public async processVideo(
        video: Express.Multer.File,
    ): Promise<string> {

        // Path for the audio output file
        const audioOutputPath = path.join(__dirname, 'temp_audio.wav');

        try {
            // Step 1: Save video to temporary file
            const videoPath = path.join('./uploads', `${uuidv4()}${path.extname(video.originalname)}`);
            fs.writeFileSync(videoPath, video.buffer);

            // Step 2: Convert video to audio (WAV format)
            await this.convertVideoToAudio(videoPath, audioOutputPath);

            // Step 3: Transcribe audio to text
            const content = await this.assemblyAiService.transcribeAudio(audioOutputPath);

            // Step 4: Clean up temporary files
            fs.unlinkSync(audioOutputPath);
            fs.unlinkSync(videoPath);

            // Step 5: Save blog
            return content
        } catch (error) {
            console.error('Error processing video to text:', error);
            throw new Error('Failed to process video to text');
        }
    }

    public async uploadTextFile(
        textFile: Express.Multer.File,
        blogMetadata: { title: string; authorId: string; language: string; categories: string[]; tags: string[]; status: string },
    ): Promise<string> {
        const { title, authorId, language, categories, tags, status } = blogMetadata;

        try {
            // Step 1: Extract text from the uploaded file
            const content = textFile.buffer.toString('utf8');

            const blog = await this.translationService.translate(content, language);
            return await this.saveBlog(title, blog, authorId, language, categories, tags, status);
        } catch (error) {
            console.error('Error uploading text file:', error);
            throw new Error('Failed to upload text file');
        }
    }

    public async createTextBlog(
        content: string,
        language: string,
    ): Promise<string> {
        // Save text blog with metadata
        return this.translationService.translate(content,'en', language)
    }

    public async processAudio(
        audio: Express.Multer.File,
        blogMetadata: { title: string; authorId: string; language: string; categories: string[]; tags: string[]; status: string },
    ): Promise<string> {
        const { title, authorId, language, categories, tags, status } = blogMetadata;

        // Generate a unique filename
        const filename = `${uuidv4()}${path.extname(audio.originalname)}`;
        // Define the directory to save the file
        const uploadDir = './uploads';
        const filePath = path.join(uploadDir, filename);

        try {
            // Ensure the upload directory exists
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir);
            }

            // Save the file to the server
            fs.writeFileSync(filePath, audio.buffer);

            // Step 1: Transcribe audio to text
            const content = await this.assemblyAiService.transcribeAudio(filePath);

            // Step 2: Clean up the uploaded audio file
            fs.unlinkSync(filePath);

            // Step 3: Save blog
            return await this.saveBlog(title, content, authorId, language, categories, tags, status);
        } catch (error) {
            console.error('Error processing audio:', error);
            throw new Error('Failed to process audio to text');
        }
    }

    private async saveBlog(
        title: string,
        content: string,
        authorId: string,
        language: string,
        categories: string[],
        tags: string[],
        status: string,
    ): Promise<string> {
        const blog = await this.translationService.translate(content, language);
        return await this.blogsRepository.saveBlog(
            title,
            blog,
            authorId,
            language,
            categories,
            tags,
            status,
        );
    }

    async getBlogs(): Promise<any> {
        return await this.blogsRepository.getBlogs();
    }

    async getBlogById(blogId: string): Promise<any> {
        return await this.blogsRepository.getBlogById(blogId);
    }

    async translateBlog(blogId: string, language: string): Promise<any> {
        const blog = await this.blogsRepository.getBlogById(blogId);
        console.log(blog)
        const translatedBlog = await this.translationService.translate(blog.content, blog.language, language);
        console.log(translatedBlog)
        const data = {
            title: blog.title,
            content: translatedBlog,
            language
        }
        return data
    }
}
