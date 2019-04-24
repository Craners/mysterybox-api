import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { ImageDto } from './image.dto';
import { ProductsDto } from './products.dto';

export class CutomCollectionPostDto {
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  published: boolean;
  @ApiModelPropertyOptional()
  image: ImageDto;
  @ApiModelPropertyOptional({ isArray: true, type: ProductsDto })
  collects: ProductsDto[];
}
