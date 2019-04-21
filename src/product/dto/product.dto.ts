import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { variantDto } from './variant.dto';
// import { ValidateNested } from 'class-validator';

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
  // @ValidateNested()
  readonly variants?: variantDto;
  @ApiModelPropertyOptional()
  readonly image?: string;
}
