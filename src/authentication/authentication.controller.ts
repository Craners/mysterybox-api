import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ShopParams } from 'src/shared/params/shop.params';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Get()
  async auth(@Req() req, @Res() res) {
    const redirectURI = await this.authService.auth(req);

    res.redirect(redirectURI);
  }

  @Get('/install')
  install(@Req() req, @Res() res) {
    res.redirect(this.authService.install(req));
  }

  @Get('/app')
  app(@Query() queryParams: ShopParams, @Res() res) {
    res.redirect(`${this.authService.FE_DOMAIN}?shop=${queryParams.shop}`);
  }
}
