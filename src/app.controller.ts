import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CutomCollectionPostDto } from '../src/custom-collection/dto/custom-collection-post.dto';
import { ShopParams } from './shared/params/shop.params';
import { CollectPostDto } from './collect/dto/collect-post.dto';
import { ProductDtoAlt } from './product/dto/product.dto.alt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async test(@Query() queryParams: ShopParams): Promise<boolean> {
    return await this.appService.test(queryParams);
  }

  @Post()
  async createMagic(
    @Query() queryParams: ShopParams,
    @Body() customCollectionPostDto: CutomCollectionPostDto,
    @Body() arrProduct: [ProductDtoAlt],
    @Body() collectPostDto: CollectPostDto,
  ): Promise<object> {
    return await this.appService.createMagic(
      queryParams,
      customCollectionPostDto,
      arrProduct,
    );
  }
}
