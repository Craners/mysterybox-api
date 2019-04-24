import { ApiModelProperty } from '@nestjs/swagger';

export class ProductsDto {
    @ApiModelProperty()
    readonly product_id: string;
}