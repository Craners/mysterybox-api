import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProductCustom } from './interfaces/IProductCustom.interface';
import { ProductDto } from './dto/productCustom.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async create(@Body() createProductDto: ProductDto) {
        await this.productService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<IProductCustom[]> {
        return await this.productService.findAll();
    }

    @Put()
    async updateProduct(@Body() ProductDto: ProductDto): Promise<IProductCustom> {
        return await this.productService.update(ProductDto);
    }

    @Delete()
    async removeAll(): Promise<boolean> {
        return await this.productService.removeAll();
    }

    @Delete(":fieldName")
    async removeByFieldName(@Param("fieldName") fieldName: string) {
        return await this.productService.removeByFieldName(fieldName);
    }
}