import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';

@Controller('stores')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Post()
    create(@Body() createStoreDto: CreateStoreDto) {
        return this.storeService.create(createStoreDto);
    }

    @Get()
    findAll() {
        return this.storeService.findAll();
    }
}
