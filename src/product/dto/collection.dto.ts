import { ApiModelProperty } from '@nestjs/swagger';

export class CollectionDto {
  @ApiModelProperty()
  readonly collectionId: string;
}
