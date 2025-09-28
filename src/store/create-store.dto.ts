import { IsNumber, IsString, Length } from 'class-validator';

export class CreateStoreDto {
    @IsString()
    @Length(1, 60)
    name: string;

    @IsString()
    email: string;

    @IsString()
    @Length(1, 400)
    address: string;

    @IsNumber()
    ownerId: number;
}
