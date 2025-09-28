import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateStoreDto {
    @IsString()
    @Length(1, 60)
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @Length(1, 400)
    @IsOptional()
    address?: string;
}
