import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlogsService } from 'src/services/blogs/blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) { }

    @Post('video')
    @UseInterceptors(FileInterceptor('video'))
    async uploadVideo(
        @UploadedFile() video: Express.Multer.File,
    ) {
        if (!video) {
            return {
                status: 400,
                message: 'No video file uploaded',
            };
        }


        // Process and save video blog
        return this.blogsService.processVideo(video);
    }

    @Post('audio')
    @UseInterceptors(FileInterceptor('audio'))
    async uploadAudio(
        @UploadedFile() audio: Express.Multer.File,
        @Body() body: { title: string; authorId: string; language: string; categories: string[]; tags: string[], status: string },
    ) {
        if (!audio) {
            return {
                status: 400,
                message: 'No audio file uploaded',
            };
        }

        const { title, authorId, language, categories, tags, status } = body;

        // Process and save audio blog
        return this.blogsService.processAudio(audio, { title, authorId, language, categories, tags, status });
    }

    @Post('text-file')
    @UseInterceptors(FileInterceptor('text-file'))
    async uploadTextFile(
        @UploadedFile() textFile: Express.Multer.File,
        @Body() body: { title: string; authorId: string; language: string; categories: string[]; tags: string[], status: string },
    ) {
        if (!textFile) {
            return {
                status: 400,
                message: 'No text file uploaded',
            };
        }

        const { title, authorId, language, categories, tags, status } = body;

        // Process and save text file blog
        return this.blogsService.uploadTextFile(textFile, { title, authorId, language, categories, tags, status });
    }

    @Post('text')
    async createTextBlog(
        @Body() body: any,
    ) {

        // Save text-based blog
        console.log(body);
        const { content, language } = body;
        console.log(content, language);
        return this.blogsService.createTextBlog(content, language);
    }

    @Get()
    async getBlogs() {
        return this.blogsService.getBlogs();
    }

    @Get(':blogId')
    async getBlogById(@Param('blogId') blogId: string) {
        return this.blogsService.getBlogById(blogId);
    }

    @Get('translate/:blogId/:language')
    async translateBlog(@Param('blogId') blogId: string, @Param('language') language: string) {
        return this.blogsService.translateBlog(blogId, language);
    }
}
