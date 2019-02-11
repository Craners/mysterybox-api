import { ApiModelProperty } from "@nestjs/swagger";
import { ProductIdType } from "../enums/productIdType.enum";
import { CustomDto } from '../../shared/dto/custom-fields.dto';

export class ProductDto extends CustomDto {
    @ApiModelProperty({ enum: ["Type", "Vendor", "Tag", "URL", "Handle"] })
    readonly product_type: ProductIdType;
}
