import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { CustomObjectService } from './custom-object.service';
import { CustomObjectDto } from './dto/customObject.dto';
import { ObjectType } from './enums/objectType.enum';

@Controller('custom-object')
export class CustomObjectController {
    constructor(private readonly customObjectService: CustomObjectService) { }

    @Post()
    async createObject(@Body() object: CustomObjectDto) {
        await this.customObjectService.createObject(object);
    }

    @Get(":id")
    async findObjById(@Param("id") id: Number): Promise<CustomObjectDto> {
        return await this.customObjectService.findObjectById(id);
    }

    @Get("/type/:objectType")
    async findObjectsByObjectType(@Param("objectType") objectType: ObjectType): Promise<CustomObjectDto[]> {
        return await this.customObjectService.findObjectsByObjectType(objectType);
    }

    @Get()
    async findAllObjects(): Promise<CustomObjectDto[]> {
        return await this.customObjectService.findAllObjects();
    }

    @Delete()
    async removeAllObjects() {
        return await this.customObjectService.removeAllObjects();
    }

    @Delete("/type/:objectType")
    async removelObjectsByObjectType(@Param("objectType") objectType: ObjectType) {
        return await this.customObjectService.removeAllObjectsByObjectType(objectType);
    }

    @Delete(":id")
    async removeObjById(@Param("id") id: Number) {
        return await this.customObjectService.removeObjectById(id);
    }
}
