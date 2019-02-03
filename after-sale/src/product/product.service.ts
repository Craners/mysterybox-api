import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IProductCustom } from './interfaces/productCustom.interface';
import { ProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(@Inject('ProductModelToken') private readonly productModel: Model<IProductCustom>) { }

    async create(createProductDto: ProductDto): Promise<IProductCustom> {
        const { field_name } = createProductDto;

        const exist = this.findByFieldName(field_name);
        if (exist) {
            throw new HttpException(`Product with field name: ${field_name} already exists.`, HttpStatus.BAD_REQUEST);
        }
        const createdProduct = new this.productModel(createProductDto);
        return await createdProduct.save();
    }

    async findAll(): Promise<IProductCustom[]> {
        return await this.productModel.find().exec();
    }

    async removeAll(): Promise<boolean> {
        var res = await this.productModel.deleteMany({});
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }

    async findByFieldName(field_name: String): Promise<ProductDto> {
        return this.productModel.find({ field_name: field_name }).exec();
    }

    async update(field_name: String, item: ProductDto): Promise<IProductCustom> {
        return this.productModel.updateOne({field_name: field_name}, item).exec();
    }

}