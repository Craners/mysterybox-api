import { ApiModelProperty } from '@nestjs/swagger';

export class CollectionDto {
  @ApiModelProperty()
  readonly collection_id: string;
}
