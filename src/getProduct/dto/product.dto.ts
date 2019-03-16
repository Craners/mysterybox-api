import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { variant } from './variant.dto';

export class ProductPostDto {
  @ApiModelProperty()
  readonly title: string;
  @ApiModelProperty()
  readonly body_html: string;
  @ApiModelProperty()
  readonly vendor?: string;
  @ApiModelProperty()
  readonly product_type?: string;
  @ApiModelPropertyOptional()
  readonly variants?: variant;
}