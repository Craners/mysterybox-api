import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProductSchemaCustom } from './interfaces/IProductCustom.interface';
import { ProductSchemaDto } from './dto/productCustom.dto';

@Controller('schema/product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async create(@Body() createProductDto: ProductSchemaDto) {
        await this.productService.createProductSchema(createProductDto);
    }

    @Get()
    async findAll(): Promise<IProductSchemaCustom[]> {
        return await this.productService.findAllProductSchemas();
    }

    @Put()
    async updateProduct(@Body() ProductDto: ProductSchemaDto): Promise<IProductSchemaCustom> {
        return await this.productService.updateProductSchema(ProductDto);
    }

    @Delete()
    async removeAll(): Promise<boolean> {
        return await this.productService.removeAllProductSchemas();
    }

    @Delete(":fieldName")
    async removeByFieldName(@Param("fieldName") fieldName: string) {
        return await this.productService.removeProductSchemaByFieldName(fieldName);
    }
}
