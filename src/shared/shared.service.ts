import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopDbService } from 'src/shop-db/shop-db.service';
import { ResponseModel } from '../shared/responseModel';
import request = require('request-promise');

@Injectable()
export class SharedService {
  constructor(private readonly shopService: ShopDbService) { }

  async requestData(options): Promise<any> {
    options.resolveWithFullResponse = true;
    return await request(options)
      .then(res => {
        return new ResponseModel(res.body, res.statusCode);
      })
      .catch(err => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  async checkParameterExists(
    params: any,
    parameterToCheck: string,
  ): Promise<boolean> {
    if (
      params[parameterToCheck] === undefined ||
      params[parameterToCheck] === null
    ) {
      return false;
    }

    return true;
  }

  async getShopAccess(queryParam: any): Promise<any> {
    if (queryParam.shop === undefined || queryParam.shop === null) {
      throw new HttpException(
        `no query parameter 'shop'`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const shopData = await this.shopService.getShopDbData(queryParam.shop);
    if (shopData !== null) {
      const shopKey = 'shop';
      const shop = shopData[shopKey];
      const accessTokenKey = 'access_token';
      const accessToken = shopData[accessTokenKey];
      const mysteryBoxCollectionIdKey = 'mystery_box_collection_id';
      const mysteryBoxCollectionId = shopData[mysteryBoxCollectionIdKey];

      return {
        shop,
        access_token: accessToken,
        mystery_box_collection_id: mysteryBoxCollectionId,
      };
    }

    return null;

  }
}
