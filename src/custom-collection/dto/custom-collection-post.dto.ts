import { ApiModelProperty } from '@nestjs/swagger';

export class CutomCollectionPostDto {
  @ApiModelProperty()
  readonly title: string;
}
