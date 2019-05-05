import { Injectable } from '@nestjs/common';
import { CustomCollectionService } from './custom-collection/custom-collection.service';
import { CutomCollectionPostDto } from './custom-collection/dto/custom-collection-post.dto';
import { ShopParams } from './shared/params/shop.params';
import { ResultCutomCollectionBase } from './custom-collection/dto/result.custom-collection.dto';
import { CollectService } from './collect/collect.service';
import { ResultCollectPostDtoBase } from './collect/dto/result.collect-post.dto';
import { ProductDtoAlt } from 'src/product/dto/product.dto.alt';
import { ProductService } from 'src/product/Product.service';
import { ResultCreateProductBase } from './product/dto/result.product.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly customCollectionService: CustomCollectionService,
    private readonly collectService: CollectService,
    private readonly productService: ProductService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createMagic(
    queryParams: ShopParams,
    cutomCollectionPostDto: CutomCollectionPostDto,
    arrProduct: [ProductDtoAlt],
    productPostDto,
  ): Promise<object> {
    const resultCutomCollectionBase: ResultCutomCollectionBase = await this.customCollectionService.createCustomCollection(
      queryParams,
      cutomCollectionPostDto,
    );

    const arrProductId = arrProduct.map(element => {
      return element.id;
    });

    arrProductId.forEach(async element => {
      const resultCollectPostDtoBase: ResultCollectPostDtoBase = await this.collectService.addProductToCollection(
        {
          productId: element,
          collectionId: resultCutomCollectionBase.custom_collection.id + '',
        },
        queryParams,
      );
    });

    const resultCreateProductBase: ResultCreateProductBase = await this.productService.createProduct(
      queryParams,
      productPostDto,
    );

    return {
      resultCreateProduct: {
        id: resultCreateProductBase.product.id,
        title: resultCreateProductBase.product.title,
      },
      resultCutomCollection: {
        id: resultCutomCollectionBase.custom_collection.id,
        title: resultCutomCollectionBase.custom_collection.title,
      },
    };
  }
}
