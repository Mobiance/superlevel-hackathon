import { Module } from '@nestjs/common';
import { BlogsRepository } from './blogs/blogs.repository';
import { UserRepository } from './users/users.repository';
import { DatabaseModule } from 'src/config/database.config';

@Module({
    imports: [DatabaseModule],
  providers: [BlogsRepository, UserRepository ],
  exports: [BlogsRepository, UserRepository]
})
export class RepositoriesModule {}
