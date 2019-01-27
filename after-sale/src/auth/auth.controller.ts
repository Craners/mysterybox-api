import { Controller, Get, Post, Body, Put, Param, Delete, Query, Req, Res } from '@nestjs/common';
import { InitService } from './init/init.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: InitService) { }

    @Get()
    async auth(@Req() req, @Res() res) {    
        res.redirect(await this.authService.auth(req));
    }

    @Get("/install")
    install(@Req() req, @Res() res) {

        res.redirect(this.authService.install(req));
    }

    @Get("/app")
    app(@Query() queryParams) {
        return "Hello World! " + queryParams.shop;
    }
}
