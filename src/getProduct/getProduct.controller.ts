import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { GetProductService } from './getProduct.service';
import { ShopParams } from 'src/shared/params/shop.params';

@Controller('/product')
export class GetProductController {
  constructor(private readonly getProductService: GetProductService) {}

  @Get('/')
  async getProduct(@Query() queryParams: ShopParams): Promise<string> {
    return await this.getProductService.getAllProducts(queryParams);
  }

  @Get('/:id')
  async getProductbyId(@Param() id, @Query() queryParams: ShopParams): Promise<string> {
    return await this.getProductService.getProductsbyId(queryParams, id);
  }
}
