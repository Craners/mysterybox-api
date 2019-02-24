import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
// import { IOrderCustom } from './interfaces/IOrderCustom.interface';
// import { OrderDto } from './dto/orderCustom.dto';

@Injectable()
export class getDataService {

    async sayHello(): Promise<string> {

        return 'hello';
    }
}
