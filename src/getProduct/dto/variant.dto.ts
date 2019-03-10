import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class variant {
  @ApiModelPropertyOptional()
  readonly option?: string;
  @ApiModelPropertyOptional()
  readonly price?: string;
  @ApiModelPropertyOptional()
  readonly sku?: string;
}
