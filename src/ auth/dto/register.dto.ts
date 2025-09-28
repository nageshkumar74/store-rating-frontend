import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterDto {
    @IsString()
    @Length(20, 60)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(8, 16)
    password: string;

    @IsString()
    @Length(1, 400)
    address: string;

    @IsString()
    role: string;
}
