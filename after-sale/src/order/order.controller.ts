import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/orderCustom.dto';
import { IOrderCustom } from './interfaces/IOrderCustom.interface';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    async create(@Body() createOrderDto: OrderDto) {
        await this.orderService.create(createOrderDto);
    }

    @Get()
    async findAll(): Promise<IOrderCustom[]> {
        return await this.orderService.findAll();
    }

    @Put()
    async updateProduct(@Body() OrderDto: OrderDto): Promise<IOrderCustom> {
        return await this.orderService.update(OrderDto);
    }

    @Delete()
    async removeAll(): Promise<boolean> {
        return await this.orderService.removeAll();
    }

    @Delete(":fieldName")
    async removeByFieldName(@Param("fieldName") fieldName: string) {
        return await this.orderService.removeByFieldName(fieldName);
    }
}
