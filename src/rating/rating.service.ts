import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Rating } from './entities/rating.entity';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
    constructor(
      @InjectRepository(Rating)
      private ratingRepository: Repository<Rating>,
    ) {}

    async create(createRatingDto: CreateRatingDto): Promise<Rating> {
        // Correctly map DTO to entity structure, including relations
        const ratingPartial: DeepPartial<Rating> = {
            value: createRatingDto.value,
            // Map userId to the user relation
            user: { id: createRatingDto.userId },
            // Map storeId to the store relation
            store: { id: createRatingDto.storeId },
        };
        const rating = this.ratingRepository.create(ratingPartial);
        return this.ratingRepository.save(rating);
    }

    async findAll(): Promise<Rating[]> {
        return this.ratingRepository.find();
    }
}
