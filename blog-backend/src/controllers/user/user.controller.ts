import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Post('signup')
    async signup(@Body() body: any) {
        return await this.userService.signup(body);
    }

    @Post('login')
    async login(@Body() body: any) {
        return await this.userService.login(body);
    }
}
