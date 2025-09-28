import { Controller, Post, Body, Res, UnauthorizedException } from '@nestjs/common';
import type { Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const hashed = await bcrypt.hash(registerDto.password, 10);
        return this.authService.register({ ...registerDto, password: hashed });
    }

    @Post('login')
    async login(
      @Body() loginDto: LoginDto,
      @Res({ passthrough: true }) res: Response
    ) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) throw new UnauthorizedException('Invalid credentials');
        const token = await this.authService.login(user);

        res.cookie('access_token', token.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'strict',
        });

        return { success: true };
    }
}
