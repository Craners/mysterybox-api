import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { getDataService } from './getData.service';
// import { OrderDto } from './dto/orderCustom.dto';
// import { IOrderCustom } from './interfaces/IOrderCustom.interface';

@Controller('get')
export class GetDataController {
    constructor(private readonly getDataService: getDataService) { }

    // @Post()
    // async create(@Body() createOrderDto: OrderDto) {
    //     await this.orderService.create(createOrderDto);
    // }

    @Get()
    async findAll(): Promise<string> {
        return await this.getDataService.sayHello();
    }

    @Get('product')
    async getproduct(): Promise<string> {
        return await this.getDataService.sayHello();
    }

    // @Put()
    // async updateProduct(@Body() OrderDto: OrderDto): Promise<IOrderCustom> {
    //     return await this.orderService.update(OrderDto);
    // }

    // @Delete()
    // async removeAll(): Promise<boolean> {
    //     return await this.orderService.removeAll();
    // }

    // @Delete(":fieldName")
    // async removeByFieldName(@Param("fieldName") fieldName: string) {
    //     return await this.orderService.removeByFieldName(fieldName);
    // }
}
