import { Controller, Get, Post, Body, Delete, Put, Param, Query } from '@nestjs/common';
import { GetDataService } from './getData.service';

@Controller('get')
export class GetDataController {
    constructor(private readonly getDataService: GetDataService) { }

    @Get('product')
    async getproduct(@Query() queryParams): Promise<string> {
        return await this.getDataService.getProducts(queryParams);
    }
}
