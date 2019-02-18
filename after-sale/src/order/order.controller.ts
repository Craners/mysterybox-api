import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderSchemaDto } from './dto/orderCustom.dto';
import { IOrderSchemaCustom } from './interfaces/IOrderSchemaCustom.interface';

@Controller('schema/order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Post()
    async create(@Body() createOrderDto: OrderSchemaDto) {
        await this.orderService.create(createOrderDto);
    }

    @Get()
    async findAll(): Promise<IOrderSchemaCustom[]> {
        return await this.orderService.findAll();
    }

    @Put()
    async updateProduct(@Body() OrderDto: OrderSchemaDto): Promise<IOrderSchemaCustom> {
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
