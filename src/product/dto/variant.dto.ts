import { ApiModelPropertyOptional } from '@nestjs/swagger';
// import { IsString, IsNumber, ValidateNested } from 'class-validator';

export class VariantDto {
  @ApiModelPropertyOptional()
  // @IsString()
  readonly option?: string;
  @ApiModelPropertyOptional()
  // @IsString()
  readonly price?: string;
  @ApiModelPropertyOptional()
  // @IsString()
  readonly sku?: string;
}
