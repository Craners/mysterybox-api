import { ApiModelProperty } from "@nestjs/swagger";
import { OrderIdType } from "../enums/orderIdType.enum";
import { CustomSchemaDto } from '../../shared/dto/customSchema.dto';

export class OrderSchemaDto extends CustomSchemaDto {
    @ApiModelProperty({ enum: ["Currency"] })
    readonly order_type: OrderIdType;
}
