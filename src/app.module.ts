import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { RatingModule } from './rating/rating.module';
import { AuthModule } from './ auth/auth.module';


@Module({
  imports: [


  // Load .env file globally
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeORM connection using ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',

        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    // Your feature modules
    UserModule,
    StoreModule,
    RatingModule,
    AuthModule,
  ],
})
export class AppModule {}
