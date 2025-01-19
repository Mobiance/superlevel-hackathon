import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AssemblyAI } from 'assemblyai';

@Injectable()
export class AssemblyAiService {
    private readonly client: AssemblyAI;

    constructor(
    ) {
        this.client = new AssemblyAI({
            apiKey: 'bef390fb233e44c8bca524548b9acc47',
        });
    }

    async transcribeAudio(audioUrl: string): Promise<string> {
        try {
            const data = { audio: audioUrl };

            // Send the transcription request
            const transcript = await this.client.transcripts.transcribe(data);

            // Return the transcription text
            return transcript.text;
        } catch (error) {
            throw new HttpException(
                `Failed to transcribe audio: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
