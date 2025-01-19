import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { DatabaseModule } from './config/database.config';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
        ControllersModule,
        ServicesModule,
        RepositoriesModule,
        DatabaseModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET') || 'secret-key',
                signOptions: { expiresIn: '1h' },
            }),
        }),
        appConfig
    ],
    controllers: [],
    providers: [ JwtStrategy],
})
export class AppModule { }
