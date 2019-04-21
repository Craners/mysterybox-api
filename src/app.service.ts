import { Injectable } from '@nestjs/common';
import { CustomCollectionService } from './custom-collection/custom-collection.service';
import { CutomCollectionPostDto } from './custom-collection/dto/custom-collection-post.dto';
import { ShopParams } from './shared/params/shop.params';
import { ResultCutomCollectionBase } from './custom-collection/dto/result.custom-collection.dto';
import { CollectService } from './collect/collect.service';

@Injectable()
export class AppService {
  constructor(
    private readonly customCollectionService: CustomCollectionService,
    private readonly collectService: CollectService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createMagic(
    queryParams: ShopParams,
    cutomCollectionPostDto: CutomCollectionPostDto,
  ): Promise<object> {
    const resultCutomCollectionBase: ResultCutomCollectionBase = await this.customCollectionService.createCustomCollection(
      queryParams,
      cutomCollectionPostDto,
    );
    const productId = 'asda';
    const x = await this.collectService.addProductToCollection(
      { productId, collectionId: resultCutomCollectionBase.id + '' },
      queryParams,
    );

    return {};
  }
}
