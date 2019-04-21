import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { ShopParams } from 'src/shared/params/shop.params';
import * as _ from 'lodash';
import { ProductPostDto } from './dto/product.dto';
import { ProductDtoAlt } from './dto/product.dto.alt';
import { CollectionDto } from './dto/collection.dto';

@Injectable()
export class ProductService {
  constructor(private readonly sharedService: SharedService) { }

  async getAllProducts(queryParam: ShopParams): Promise<any> {
    const shopAccess = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopAccess) {
      options = {
        uri: `https://${shopAccess.shop}/admin/products.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
        json: true, // Automatically stringifies the body to JSON
      };
    }

    return await this.sharedService.requestData(options);
  }

  async getProductsbyId(
    queryParam: ShopParams,
    id: ProductDtoAlt,
  ): Promise<any> {
    // console.log(`this is the ${queryParam.shop} and this is the id: ${id.id}`);

    const shopAccess = await this.sharedService.getShopAccess(queryParam);

    let options;
    if (shopAccess) {
      options = {
        uri: `https://${shopAccess.shop}/admin/products/${id.id}.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
        json: true, // Automatically stringifies the body to JSON
      };
    }

    const shopData = await this.sharedService.requestData(options);

    return shopData;
  }

  async getProductsbyCollection(
    queryParam: ShopParams,
    collectionId: CollectionDto,
  ): Promise<any> {
    const shopAccess = await this.sharedService.getShopAccess(queryParam);
    let options;
    if (shopAccess) {
      options = {
        uri: `https://${shopAccess.shop}/admin/products.json?collection_id=${
          collectionId.collectionId
        }`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
        json: true, // Automatically stringifies the body to JSON
      };
    }

    const shopData = await this.sharedService.requestData(options);

    return shopData;
  }

  async createProduct(
    queryParam: ShopParams,
    productPostDto: ProductPostDto,
  ): Promise<any> {
    const shopAccess = await this.sharedService.getShopAccess(queryParam);

    const product = {
      title: productPostDto.title,
      body_html: productPostDto.bodyHtml,
      vendor: productPostDto.vendor,
      product_type: productPostDto.productType,
      // TODO: this product does not accept multiple variant.
      // it should accept up to 3 variant
      variants: [
        {
          option1: productPostDto.variants.option,
          price: productPostDto.variants.price,
          sku: productPostDto.variants.sku,
        },
      ],
      images: [
        {
          src: productPostDto.image,
        },
      ],
    };
    let options;
    if (shopAccess) {
      options = {
        method: 'POST',
        uri: `https://${shopAccess.shop}/admin/products.json`,
        body: {
          product,
        },
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
        json: true,
      };
    }

    const shopData = await this.sharedService.requestData(options);

    return shopData;
  }
}
