import { Controller,Get } from '@nestjs/common';
import { AppService } from '../app.service';


@Controller('getdata')
export class GetdataController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
