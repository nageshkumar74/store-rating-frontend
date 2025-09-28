import { IsString, Length, Matches } from 'class-validator';

export class ChangePasswordDto {
    @IsString()
    @Length(8, 16)
    @Matches(/(?=.*[A-Z])(?=.*[!@#$%^&*])/, {
        message: 'Password must contain at least one uppercase and one special character',
    })
    currentPassword: string;

    @IsString()
    @Length(8, 16)
    @Matches(/(?=.*[A-Z])(?=.*[!@#$%^&*])/, {
        message: 'Password must contain at least one uppercase and one special character',
    })
    newPassword: string;
}
