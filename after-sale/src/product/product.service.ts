import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IProductSchemaCustom } from './interfaces/IProductCustom.interface';
import { ProductSchemaDto } from './dto/productCustom.dto';

@Injectable()
export class ProductService {
    constructor(@Inject('ProductSchemaModelToken') private readonly productSchemaModel: Model<IProductSchemaCustom>) { }

    async createProductSchema(createProductSchemaDto: ProductSchemaDto): Promise<IProductSchemaCustom> {
        const { field_name } = createProductSchemaDto;

        const exist = await this.findProductSchemaByFieldName(field_name);

        if (exist !== null) {
            throw new HttpException(`Product schema with field name: ${field_name} already exists.`, HttpStatus.BAD_REQUEST);
        }
        const createdProductSchema = new this.productSchemaModel(createProductSchemaDto);
        return await createdProductSchema.save();
    }

    async findAllProductSchemas(): Promise<IProductSchemaCustom[]> {
        return await this.productSchemaModel.find().exec();
    }

    async removeAllProductSchemas(): Promise<boolean> {
        var res = await this.productSchemaModel.deleteMany({});
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }

    async findProductSchemaByFieldName(field_name: String): Promise<ProductSchemaDto> {
        return this.productSchemaModel.findOne({ field_name: field_name }).exec();
    }

    async updateProductSchema(ProductDto: ProductSchemaDto): Promise<IProductSchemaCustom> {
        const { field_name, label, placeholder, required, type, values } = ProductDto;

        if (!ProductDto || !field_name) {
            throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
        }

        const exist = await this.findProductSchemaByFieldName(field_name);

        if (exist === null) {
            throw new HttpException(`Element with field_name: ${field_name} Not Found`, HttpStatus.NOT_FOUND);
        }

        exist.label = label;
        exist.placeholder = placeholder;
        exist.required = required;
        exist.type = type;
        exist.values = values;

        return this.productSchemaModel.updateOne({ field_name: field_name }, exist).exec();
    }

    async removeProductSchemaByFieldName(field_name: string): Promise<boolean> {
        var res = await this.productSchemaModel.findOneAndDelete({ field_name: field_name });
        if (res !== null) {
            return true;
        }
        return false;
    }

}