import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IProductCustom } from './interfaces/IProductCustom.interface';
import { ProductDto } from './dto/productCustom.dto';

@Injectable()
export class ProductService {
    constructor(@Inject('ProductModelToken') private readonly productModel: Model<IProductCustom>) { }

    async create(createProductDto: ProductDto): Promise<IProductCustom> {
        const { field_name } = createProductDto;

        const exist = await this.findByFieldName(field_name);

        if (exist !== null) {
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
        return this.productModel.findOne({ field_name: field_name }).exec();
    }

    async update(ProductDto: ProductDto): Promise<IProductCustom> {
        const { field_name, label, placeholder, required, type, values } = ProductDto;

        if (!ProductDto || !field_name) {
            throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
        }

        const exist = await this.findByFieldName(field_name);
        
        if (exist === null) {
            throw new HttpException(`Element with field_name: ${field_name} Not Found`, HttpStatus.NOT_FOUND);
        }

        exist.label = label;
        exist.placeholder = placeholder;
        exist.required = required;
        exist.type = type;
        exist.values = values;

        return this.productModel.updateOne({ field_name: field_name }, exist).exec();
    }

    async removeByFieldName(field_name: string): Promise<boolean> {
        var res = await this.productModel.findOneAndDelete({ field_name: field_name });
        if (res !== null) {
            return true;
        }
        return false;
    }

}