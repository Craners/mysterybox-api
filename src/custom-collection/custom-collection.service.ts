import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CutomCollectionPostDto } from './dto/custom-collection-post.dto';
import { SharedService } from 'src/shared/shared.service';
import { verify } from 'specified';
import {
  ResultCutomCollectionPostDto,
  ResultCutomCollectionBase,
} from './dto/result.custom-collection.dto';

@Injectable()
export class CustomCollectionService {
  constructor(private readonly sharedService: SharedService) {}

  async getCustomCollections(queryParam: any): Promise<any> {
    const shopData = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopData) {
      options = {
        uri: `https://${shopData.shop}/admin/custom_collections.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    return await this.sharedService.requestData(options);
  }

  async createCustomCollection(
    queryParam: any,
    customCollectionPostDto: CutomCollectionPostDto,
  ): Promise<ResultCutomCollectionBase> {
    const shopData = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopData) {
      options = {
        method: 'POST',
        uri: `https://${shopData.shop}/admin/custom_collections.json`,
        body: {
          custom_collection: {
            title: customCollectionPostDto.title,
            published: false,
          },
        },
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    const result: ResultCutomCollectionBase = await this.sharedService.requestData(
      options,
    );
    const resultVerify = verify(ResultCutomCollectionPostDto, result).value();
    return result;
  }
}
