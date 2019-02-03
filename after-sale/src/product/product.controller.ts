import { Controller, Get, Post, Body, Delete, HttpException, HttpStatus, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProductCustom } from './interfaces/productCustom.interface';
import { ProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async create(@Body() createProductDto: ProductDto) {
        this.productService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<IProductCustom[]> {
        return this.productService.findAll();
    }

    @Put()
    async updateProduct(@Body() productDto: ProductDto): Promise<IProductCustom> {
        const { field_name, label, placeholder, required, type, values } = productDto;

        if(!productDto || !field_name)
        {
            throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
        }

        const exist = await this.productService.findByFieldName(field_name);

        if(!exist)
        {
            throw new HttpException(`${field_name} Not Found`, HttpStatus.NOT_FOUND);
        }

        exist.label = label;
        exist.placeholder = placeholder;
        exist.required = required;
        exist.type = type;
        exist.values = values;

        return await this.productService.update(field_name, exist);
    }

    @Delete()
    async removeAll(): Promise<boolean> {
        return this.productService.removeAll();
    }
}