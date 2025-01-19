
import { Injectable } from '@nestjs/common';
import axios from 'axios'
import { config } from 'dotenv';

config();

@Injectable()
export class TranslationService {

    async translate(text: string, source?: string,  lang?: string) {
        try {
            const response = await axios.post('https://deep-translate1.p.rapidapi.com/language/translate/v2',
                {
                    q: text,
                    source: source||'en',
                    target: lang
                }, {
                headers: {
                    'content-type': 'application/json',
                    'x-rapidapi-host': process.env.RAPID_API_HOST,
                    'x-rapidapi-key': process.env.RAPID_API_KEY
                }
            });
            console.log(response.data)
            return response.data.data.translations.translatedText;
        } catch (error) {
            throw new Error(`Failed to pass text to Langflow: ${error.message}`);
        }
    }
}

