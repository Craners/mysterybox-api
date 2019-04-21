import { Controller, Get, Query, Post, Body, Delete } from '@nestjs/common';
import { ShopParams } from 'src/shared/params/shop.params';
import { CollectService } from './collect.service';
import { CollectPostDto } from './dto/collect-post.dto';
import { async } from 'rxjs/internal/scheduler/async';
import { RemoveProductFromCollectionParams } from 'src/shared/params/removeProductFromCollection.params';

@Controller('collect')
export class CollectController {
    constructor(private readonly collectService: CollectService) { }

    @Get()
    async getCollects(@Query() queryParams: ShopParams): Promise<any> {
        return await this.collectService.getCollects(queryParams);
    }

    @Post()
    async addProductToCollection(@Body() collectPostDto: CollectPostDto, @Query() queryParams: ShopParams): Promise<any> {
        return await this.collectService.addProductToCollection(collectPostDto, queryParams);
    }

    @Delete()
    async removeProductFromCollection(@Query() removeProductFromCollectionParams: RemoveProductFromCollectionParams) {
        return await this.collectService.removeProductFromCollection(removeProductFromCollectionParams);
    }
}
