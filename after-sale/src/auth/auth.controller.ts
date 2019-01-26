import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { InitService } from './init/init.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: InitService) { }

    @Get()
    init(@Query() shop: string) {

        // return this.authService.init();
        // console.log(id);
        // return 'id ' + id;
        return this.authService.confused(shop);
    }
}
