import { ApiModelProperty } from "@nestjs/swagger";

export class CustomCollectionSchemaDto {
    @ApiModelProperty()
    readonly collectionId: string;

    @ApiModelProperty()
    readonly productId: string;
}
