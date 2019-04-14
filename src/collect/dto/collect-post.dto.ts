import { ApiModelProperty } from "@nestjs/swagger";

export class CollectPostDto {
    @ApiModelProperty()
    readonly productId: string;
    
    @ApiModelProperty()
    readonly collectionId: string;
}
