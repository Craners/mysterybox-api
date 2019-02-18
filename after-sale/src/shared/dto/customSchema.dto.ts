import { ApiModelPropertyOptional, ApiModelProperty } from "@nestjs/swagger";
import { FieldType } from "../enums/fields.enum";

export class CustomSchemaDto {
    @ApiModelProperty()
    readonly field_name: string;
    @ApiModelPropertyOptional()
    label?: string;
    @ApiModelProperty({ type: [String] })
    values: string[];
    @ApiModelPropertyOptional()
    placeholder?: string;
    @ApiModelProperty()
    required: boolean;
    @ApiModelProperty({ enum: ["Text", "Large Text", "Number", "Radio Buttons", "Checkboxes", "Drop-down Menu"] })
    type: FieldType;
}
