import { Controller, Get, Post, Body, Delete, Put, Param, Query, Req, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
// import { OrderDto } from './dto/orderCustom.dto';
// import { IOrderCustom } from './interfaces/IOrderCustom.interface';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) { }

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
