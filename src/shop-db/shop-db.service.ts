import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IShop } from 'src/shared/interfaces/IShop.interface';

@Injectable()
export class ShopDbService {
  constructor(
    @Inject('GetShopModelToken') private readonly shopModel: Model<IShop>,
  ) { }

  async getShopDbData(shop): Promise<any> {
    try {
      const shopData = await this.shopModel.findOne({ shop }).exec();
      return shopData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createShopDbData(shop: string, accessToken: string): Promise<any> {
    //model validation (no null, no undefined, no empty string)
    const tuple = new this.shopModel({ shop, access_token: accessToken });
    const exists = await this.shopModel.findOne({ shop }).exec();

    if (exists === null) {
      return await tuple.save();
    }
    return null;
  }

  async updateShopDbData(shop: string, mysteryBoxCollectionId: string): Promise<any> {
    const updated = await this.shopModel.updateOne({ shop }, { $set: { mystery_box_collection_id: mysteryBoxCollectionId } }).exec();
    return await updated;
  }
}
