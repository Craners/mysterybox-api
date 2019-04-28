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
  constructor(private readonly sharedService: SharedService) { }

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

  async getCustomCollectionByTitle(queryParam: any, collectionName: string): Promise<any> {
    const collections = await this.getCustomCollections(queryParam);
    const filtered = collections.custom_collections.filter(collection => {
      return collection.title === collectionName;
    });

    return filtered[0];
  }

  checkCollectionExists(collections, title): boolean {
    const filtered = collections.custom_collections.filter(collection => {
      return collection.title === title;
    });

    return filtered.length !== 0;
  }

  async createCustomCollection(
    queryParam: any,
    customCollectionPostDto: CutomCollectionPostDto,
  ): Promise<ResultCutomCollectionBase> {
    const shopData = await this.sharedService.getShopAccess(queryParam);
    let options;
    let exists;
    if (shopData) {
      const collections = await this.getCustomCollections(shopData);
      exists = this.checkCollectionExists(collections, customCollectionPostDto.title);

      options = {
        method: 'POST',
        uri: `https://${shopData.shop}/admin/custom_collections.json`,
        body: {
          custom_collection: {
            title: customCollectionPostDto.title,
            published: customCollectionPostDto.published,
            image: customCollectionPostDto.image,
            collects: customCollectionPostDto.collects,
          },
        },
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopData.access_token,
        },
        json: true,
      };
    }

    if (!exists) {
      const result: ResultCutomCollectionBase = await this.sharedService.requestData(
        options,
      );
      const resultVerify = verify(ResultCutomCollectionPostDto, result).value();
      return result;
    }
    return null;
  }
}
