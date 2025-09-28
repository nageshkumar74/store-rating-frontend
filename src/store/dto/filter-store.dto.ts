import { IsString, IsOptional } from 'class-validator';

export class FilterStoreDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    address?: string;
}
