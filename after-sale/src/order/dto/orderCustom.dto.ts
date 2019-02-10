import { ApiModelProperty } from "@nestjs/swagger";
import { OrderIdType } from "../enums/orderIdType.enum";
import { CustomDto } from '../../shared/dto/custom-fields.dto';

export class OrderDto extends CustomDto {
    @ApiModelProperty({ enum: ["Currency"] })
    readonly order_type: OrderIdType;
}
