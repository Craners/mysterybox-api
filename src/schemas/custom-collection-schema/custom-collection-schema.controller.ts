import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { CustomCollectionSchemaService } from './custom-collection-schema.service';
import { ShopParams } from 'src/shared/params/shop.params';
import { CustomCollectionSchemaDto } from './dto/custom-collection-schema.dto';

@Controller('schema/custom-collection')
export class CustomCollectionSchemaController {
  constructor(
    private readonly customCollectionSchemaService: CustomCollectionSchemaService,
  ) {}

  //TODO: Delete by collectionId and productId
  @Post()
  async create(
    @Query() queryParams: ShopParams,
    @Body() customCollectionSchemaDto: CustomCollectionSchemaDto,
  ) {
    return await this.customCollectionSchemaService.createOrUpdate(
      queryParams,
      customCollectionSchemaDto,
    );
  }

  @Get()
  async findByShop(@Query() queryParams: ShopParams) {
    return await this.customCollectionSchemaService.findByShop(queryParams);
  }

  // @Delete()
  // async removeByShop(@Query() queryParams: ShopParams) {
  //   return await this.customCollectionSchemaService.removeAllByShop(
  //     queryParams,
  //   );
  // }
}
