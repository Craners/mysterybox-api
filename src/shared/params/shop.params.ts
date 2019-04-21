import { ApiModelProperty } from '@nestjs/swagger';

export class ShopParams {
  @ApiModelProperty()
  shop: string;
}
