import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IShop } from 'src/shared/interfaces/IShop.interface';

@Injectable()
export class DataService {
  constructor(
    @Inject('GetShopModelToken') private readonly shopModel: Model<IShop>,
  ) {}

  async getShopData(shop): Promise<any> {
    const shopData = await this.shopModel.findOne({ shop: shop }).exec();

    return shopData;
  }

  async createShopData(shop, access_token): Promise<any> {
    const tuple = new this.shopModel({ shop, access_token });
    const exists = await this.shopModel.findOne({ shop: shop }).exec();

    if (exists === null) {
      return await tuple.save();
    }
    return null;
  }
}
