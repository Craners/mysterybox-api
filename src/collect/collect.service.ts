import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { CollectPostDto } from './dto/collect-post.dto';

@Injectable()
export class CollectService {
  constructor(private readonly sharedService: SharedService) {}

  async getCollects(queryParam: any): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);

    if (shopData) {
      var options = {
        uri: `https://${shopData.shop}/admin/collects.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    return await this.sharedService.requestData(options);
  }

  async addProductToCollection(
    collectPostDto: CollectPostDto,
    queryParam: any,
  ): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);

    if (shopData) {
      var options = {
        method: 'POST',
        uri: `https://${shopData.shop}/admin/collects.json`,
        body: {
          collect: {
            product_id: collectPostDto.productId,
            collection_id: collectPostDto.collectionId,
          },
        },
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    return await this.sharedService.requestData(options);
  }

  async removeProductFromCollection(queryParam: any): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);

    const paramExists = await this.sharedService.checkParameterExists(
      queryParam,
      'collection_id',
    );

    if (shopData && paramExists) {
      var options = {
        method: 'DELETE',
        uri: `https://${shopData.shop}/admin/collects/${
          queryParam.collection_id
        }.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    return await this.sharedService.requestData(options);
  }
}
