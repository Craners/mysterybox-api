import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ProductService } from './Product.service';
import { ShopParams } from 'src/shared/params/shop.params';
import { ProductPostDto } from './dto/product.dto';
import { ProductDtoAlt } from './dto/product.dto.alt';
import { CollectionDto } from './dto/collection.dto';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';

@Controller('/product')
export class ProductController {
  constructor(private readonly getProductService: ProductService) {}

  // TODO: Remove product by id.
  @Get('/collection')
  async getProductbyCollection(
    @Query() collectionId: CollectionDto,
    @Query() queryParams: ShopParams,
  ): Promise<any> {
    // console.log(queryParams.shop + ' | ' + collection_id.collection_id);
    return await this.getProductService.getProductsbyCollection(
      queryParams,
      collectionId,
    );
  }

  @Get('/')
  async getProduct(@Query() queryParams: ShopParams): Promise<string> {
    return await this.getProductService.getAllProducts(queryParams);
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async createProduct(
    @Query() queryParams: ShopParams,
    @Body(new ValidationPipe()) productPostDto: ProductPostDto,
  ): Promise<object> {
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
