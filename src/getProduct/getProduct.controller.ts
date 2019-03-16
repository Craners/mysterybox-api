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
import { ProductPostDto } from './dto/product.dto';
import { ProductDtoAlt } from './dto/product.dto.alt';
import { CollectionDto } from './dto/collection.dto';

@Controller('/product')
export class GetProductController {
  constructor(private readonly getProductService: GetProductService) {}

  // TODO: it's not being hit properly.
  // it hits the :id by mistake. fix this!
  @Get('/collection')
  async getProductbyCollection(
    @Query() collection_id: CollectionDto,
    @Query() queryParams: ShopParams,
  ): Promise<any> {
    // console.log(queryParams.shop + ' | ' + collection_id.collection_id);
    return await this.getProductService.getProductsbyCollection(
      queryParams,
      collection_id,
    );
  }

  @Get('/')
  async getProduct(@Query() queryParams: ShopParams): Promise<string> {
    return await this.getProductService.getAllProducts(queryParams);
  }

  @Post('/')
  async createProduct(
    @Query() queryParams: ShopParams,
    @Body() productPostDto: ProductPostDto,
  ): Promise<string> {
    return await this.getProductService.createProduct(
      queryParams,
      productPostDto,
    );
  }

  @Get(':id')
  async getProductbyId(
    @Param() id: ProductDtoAlt,
    @Query() queryParams: ShopParams,
  ): Promise<string> {
    return await this.getProductService.getProductsbyId(queryParams, id);
  }
}
