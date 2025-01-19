import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/users/users.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async signup(body: any) {
        const email = body.email;
        const password = body.password;
        const name = body.name;

        await this.userRepository.createUser(email, password, name);
    }

    async login(body: any) {
        const email = body.email;
        const password = body.password;

        const user = await this.userRepository.findOneByEmail(email);

        if (!user) {
            return 'User not found';
        }

        if (user.password !== password) {
            return 'Invalid password';
        }

        return user;
    }

}
