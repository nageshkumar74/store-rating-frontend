import { Controller, Get, Post, Body } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Controller('ratings')
export class RatingController {
    constructor(private readonly ratingService: RatingService) {}

    @Post()
    create(@Body() createRatingDto: CreateRatingDto) {
        return this.ratingService.create(createRatingDto);
    }

    @Get()
    findAll() {
        return this.ratingService.findAll();
    }
}
