import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { ICustomCollectionSchemaWrapper } from './interfaces/custom-collection-schema.interface';
import { CustomCollectionSchemaDto } from './dto/custom-collection-schema.dto';

@Injectable()
export class CustomCollectionSchemaService {
  constructor(
    @Inject('CustomCollectionSchemaModelToken')
    private readonly customCollectionSchemaWrapperModel: Model<
      ICustomCollectionSchemaWrapper
    >,
    private readonly sharedService: SharedService,
  ) {}

  async createOrUpdate(
    queryParam: any,
    customCollectionSchemaDto: CustomCollectionSchemaDto,
  ): Promise<any> {
    var shopAccess = await this.sharedService.getShopAccess(queryParam);

    var shopObject = await this.findShop(shopAccess.shop);

    if (shopObject === null || shopObject === undefined) {
      const createdCustomCollectionSchemaWrapper = new this.customCollectionSchemaWrapperModel(
        {
          shop: shopAccess.shop,
          custom_collection_schemas: customCollectionSchemaDto,
        },
      );
      return await createdCustomCollectionSchemaWrapper.save();
    } else {
      shopObject.custom_collection_schemas.push(customCollectionSchemaDto);
      return await shopObject.save();
    }
  }

  async findByShop(queryParam: any): Promise<any> {
    var shopAccess = await this.sharedService.getShopAccess(queryParam);
    if (shopAccess) {
      return await this.findShop(shopAccess.shop);
    }
  }

  async findShop(shop: string): Promise<any> {
    return await this.customCollectionSchemaWrapperModel.findOne({
      shop: shop,
    });
  }

  // async removeAllByShop(queryParam: any): Promise<boolean> {
  //   var shopAccess = await this.sharedService.getShopAccess(queryParam);

  //   if (shopAccess) {
  //     var res = await this.customCollectionSchemaWrapperModel.deleteOne({
  //       shop: shopAccess.shop,
  //     });
  //     if (res.deletedCount > 0) {
  //       return true;
  //     }
  //     return false;
  //   }

  //   return false;
  // }
}
