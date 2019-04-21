import { ApiModelPropertyOptional } from '@nestjs/swagger';
// import { IsString, IsNumber, ValidateNested } from 'class-validator';

export class ImagesDto {
    @ApiModelPropertyOptional()
    readonly attachment?: string;
}
