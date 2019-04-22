import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { CollectPostDto } from './dto/collect-post.dto';
import { verify } from 'specified';
import { ResultCollectPostDto, ResultCollectPostDtoBase } from './dto/result.collect-post.dto';

@Injectable()
export class CollectService {
  constructor(private readonly sharedService: SharedService) {}

  async getCollects(queryParam: any): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopData) {
      options = {
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
  ): Promise<ResultCollectPostDtoBase> {
    const shopData = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopData) {
      options = {
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

    const result = await this.sharedService.requestData(options);
    const resultVerify = verify(ResultCollectPostDto, result).value();
    return {
      collectionId: resultVerify.collect.collection_id,
      id: resultVerify.collect.id,
      productId: resultVerify.collect.product_id,
    };
  }

  async removeProductFromCollection(queryParam: any): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);

    const paramExists = await this.sharedService.checkParameterExists(
      queryParam,
      'collection_id',
    );
    let options;
    if (shopData && paramExists) {
      options = {
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
