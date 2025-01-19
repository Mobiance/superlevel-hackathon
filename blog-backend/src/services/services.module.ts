import { Module } from '@nestjs/common';
import { BlogsService } from './blogs/blogs.service';
import { AssemblyAiService } from './assembly-ai/assembly-ai.service';
import { UserService } from './user/user.service';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { JwtModule } from '@nestjs/jwt';
import { TranslationService } from './translation/translation.service';

@Module({
    imports: [RepositoriesModule, JwtModule ],
    providers: [BlogsService, TranslationService, AssemblyAiService, UserService, ],
    exports: [BlogsService, UserService]
})
export class ServicesModule { }
