import { ApiModelProperty } from '@nestjs/swagger';
import { CustomCollectionSchemaDto } from './custom-collection-schema.dto';

export class CustomCollectionSchemaWrapperDto {
  @ApiModelProperty()
  readonly shop: string;

  @ApiModelProperty()
  readonly custom_collection_schemas: [CustomCollectionSchemaDto];
}
