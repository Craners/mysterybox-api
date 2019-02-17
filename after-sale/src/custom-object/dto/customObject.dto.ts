import { ApiModelPropertyOptional, ApiModelProperty } from "@nestjs/swagger";
import { FieldType } from "../../shared/enums/fields.enum";
import { ObjectType } from "../enums/objectType.enum";

export class CustomObjectDto {
    @ApiModelProperty()
    readonly id: Number;
    @ApiModelPropertyOptional()
    readonly label?: String;
    @ApiModelProperty({ type: [String] })
    readonly values: String[];
    @ApiModelProperty({ enum: ["Text", "Large Text", "Number", "Radio Buttons", "Checkboxes", "Drop-down Menu"] })
    readonly type: FieldType;
    @ApiModelProperty({ enum: ["Product", "Order"]})
    readonly objectType: ObjectType
}
