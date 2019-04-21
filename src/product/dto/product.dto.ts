import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { VariantDto } from './variant.dto';
// import { ValidateNested } from 'class-validator';

export class ProductPostDto {
  @ApiModelProperty()
  readonly title: string;
  @ApiModelProperty()
  readonly bodyHtml: string;
  @ApiModelProperty()
  readonly vendor?: string;
  @ApiModelProperty()
  readonly productType?: string;
  @ApiModelPropertyOptional()
  // @ValidateNested()
  readonly variants?: VariantDto;
}
