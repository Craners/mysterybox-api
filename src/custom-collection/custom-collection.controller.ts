import { Controller, Query, Get, Post, Body } from '@nestjs/common';
import { CustomCollectionService } from './custom-collection.service';
import { ShopParams } from 'src/shared/params/shop.params';
import { CutomCollectionPostDto } from './dto/custom-collection-post.dto';

@Controller('custom-collection')
export class CustomCollectionController {
  constructor(
    private readonly customCollectionService: CustomCollectionService,
  ) {}

  @Get()
  async getCustomCollection(@Query() queryParams: ShopParams): Promise<any> {
    return await this.customCollectionService.getCustomCollections(queryParams);
  }

  @Post()
  async createCustomCollection(
    @Body() customCollectionPostDto: CutomCollectionPostDto,
    @Query() queryParams: ShopParams,
  ): Promise<any> {
    return await this.customCollectionService.createCustomCollection(
      queryParams,
      customCollectionPostDto,
    );
  }
}
