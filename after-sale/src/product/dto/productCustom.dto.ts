import { ApiModelProperty } from "@nestjs/swagger";
import { ProductIdType } from "../enums/productIdType.enum";
import { CustomSchemaDto } from '../../shared/dto/customSchema.dto';

export class ProductSchemaDto extends CustomSchemaDto {
    @ApiModelProperty({ enum: ["Type", "Vendor", "Tag", "URL", "Handle"] })
    readonly product_type: ProductIdType;
}
