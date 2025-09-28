// src/rating/dto/create-rating.dto.ts
import { IsNumber, Min, Max } from 'class-validator';

export class CreateRatingDto {
    @IsNumber()
    @Min(1)
    @Max(5)
    value: number;        // Rating value (1–5), required

    @IsNumber()
    userId: number;       // ID of the user submitting the rating, required

    @IsNumber()
    storeId: number;      // ID of the store being rated, required
}
