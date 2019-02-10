import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IOrderCustom } from './interfaces/IOrderCustom.interface';
import { OrderDto } from './dto/orderCustom.dto';

@Injectable()
export class OrderService {
    constructor(@Inject('OrderModelToken') private readonly orderModel: Model<IOrderCustom>) { }

    async create(createOrderDto: OrderDto): Promise<IOrderCustom> {
        const { field_name } = createOrderDto;

        const exist = await this.findByFieldName(field_name);

        if (exist !== null) {
            throw new HttpException(`Order with field name: ${field_name} already exists.`, HttpStatus.BAD_REQUEST);
        }
        const createdProduct = new this.orderModel(createOrderDto);
        return await createdProduct.save();
    }

    async findAll(): Promise<IOrderCustom[]> {
        return await this.orderModel.find().exec();
    }

    async removeAll(): Promise<boolean> {
        var res = await this.orderModel.deleteMany({});
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }

    async findByFieldName(field_name: String): Promise<OrderDto> {
        return this.orderModel.findOne({ field_name: field_name }).exec();
    }

    async update(OrderDto: OrderDto): Promise<IOrderCustom> {
        const { field_name, label, placeholder, required, type, values } = OrderDto;

        if (!OrderDto || !field_name) {
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

        return this.orderModel.updateOne({ field_name: field_name }, exist).exec();
    }

    async removeByFieldName(field_name: string): Promise<boolean> {
        var res = await this.orderModel.findOneAndDelete({ field_name: field_name });
        if (res !== null) {
            return true;
        }
        return false;
    }
}
