import { Injectable } from '@nestjs/common';
import { CustomCollectionService } from './custom-collection/custom-collection.service';
import { CutomCollectionPostDto } from './custom-collection/dto/custom-collection-post.dto';
import { ShopParams } from './shared/params/shop.params';
import { ResultCutomCollectionBase } from './custom-collection/dto/result.custom-collection.dto';
import { CollectService } from './collect/collect.service';
import { ResultCollectPostDtoBase } from './collect/dto/result.collect-post.dto';
import { ProductDtoAlt } from 'dist/getProduct/dto/product.dto.alt';
import { ImageDto } from './custom-collection/dto/image.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly customCollectionService: CustomCollectionService,
    private readonly collectService: CollectService,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async createMagic(
    queryParams: ShopParams,
    cutomCollectionPostDto: CutomCollectionPostDto,
    arrProduct: [ProductDtoAlt],
  ): Promise<object> {
    const resultCutomCollectionBase: ResultCutomCollectionBase = await this.customCollectionService.createCustomCollection(
      queryParams,
      cutomCollectionPostDto,
    );
    const arrProductId = arrProduct.map(element => {
      return element.id;
    });
    const resultCollectPostDtoBase: ResultCollectPostDtoBase = await this.collectService.addProductToCollection(
      { productId: arrProductId[0], collectionId: resultCutomCollectionBase.id + '' },
      queryParams,
    );

    return {};
  }
}
