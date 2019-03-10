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

@Controller('/product')
export class GetProductController {
  constructor(private readonly getProductService: GetProductService) {}

  @Get('/')
  async getProduct(@Query() queryParams): Promise<string> {
    return await this.getProductService.getAllProducts(queryParams);
  }

  @Get('/:id')
  async getProductbyId(@Param() id, @Query() queryParams): Promise<string> {
    return await this.getProductService.getProductsbyId(queryParams, id);
  }
}
