import { IsNumber, Min, Max, IsOptional } from 'class-validator';

export class UpdateRatingDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating?: number;
}
