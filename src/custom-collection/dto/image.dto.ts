import { ApiModelProperty } from '@nestjs/swagger';

export class ImageDto {
  @ApiModelProperty()
  src: string;
  @ApiModelProperty()
  alt: string;
}
