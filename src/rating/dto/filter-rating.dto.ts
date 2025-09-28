import { IsNumber, IsOptional } from 'class-validator';

export class FilterRatingDto {
  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsNumber()
  @IsOptional()
  storeId?: number;

  @IsNumber()
  @IsOptional()
  min?: number;

  @IsNumber()
  @IsOptional()
  max?: number;
}
