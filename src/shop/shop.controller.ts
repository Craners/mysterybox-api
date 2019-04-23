import {
    Controller,
    Get,
    Body,
    Param,
    Query,
} from '@nestjs/common';
import { ShopParams } from 'src/shared/params/shop.params';
import { ShopService } from './shop.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) { }

    @ApiResponse({ status: 200, description: 'Returns information about shop.' })
    @Get('/')
    async getShopInfo(@Query() queryParams: ShopParams): Promise<any> {
        const data = await this.shopService.getShopInfo(queryParams);
        return data;
    }

}
