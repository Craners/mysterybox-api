import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CutomCollectionPostDto } from '../src/custom-collection/dto/custom-collection-post.dto';
import { ShopParams } from './shared/params/shop.params';
import { ProductDtoAlt } from './product/dto/product.dto.alt';
import { ProductPostDto } from './product/dto/product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createMagic(
    @Query() queryParams: ShopParams,
    @Body('customCollection') customCollectionPostDto: CutomCollectionPostDto,
    @Body('products') arrProduct: [ProductDtoAlt],
    @Body('resultProduct') productPostDto: ProductPostDto,
  ): Promise<object> {
    return await this.appService.createMagic(
      queryParams,
      customCollectionPostDto,
      arrProduct,
      productPostDto,
    );
  }
}
