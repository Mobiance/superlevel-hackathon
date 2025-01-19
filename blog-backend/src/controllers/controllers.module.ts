import { Module } from '@nestjs/common';
import { BlogsController } from './blogs/blogs.controller';
import { ServicesModule } from 'src/services/services.module';
import { UserController } from './user/user.controller';

@Module({
    imports: [ServicesModule],
  controllers: [BlogsController, UserController]
})
export class ControllersModule {}
