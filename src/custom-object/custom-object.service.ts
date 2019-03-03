import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ICustomObject } from './interfaces/ICustomObject.interface';
import { CustomObjectDto } from './dto/customObject.dto';
import { ObjectType } from './enums/objectType.enum';

@Injectable()
export class CustomObjectService {
    constructor(@Inject('CustomObjectModelToken') private readonly customObjectModel: Model<ICustomObject>) { }

    async createObject(createObjectDto: CustomObjectDto): Promise<ICustomObject> {
        const { id } = createObjectDto;

        const exist = await this.findObjectById(id);

        if (exist !== null) {
            throw new HttpException(`Object with id: ${id} already exists.`, HttpStatus.BAD_REQUEST);
        }
        const createdObject = new this.customObjectModel(createObjectDto);
        return await createdObject.save();
    }

    async findAllObjects(): Promise<CustomObjectDto[]> {
        return await this.customObjectModel.find().exec();
    }

    async findObjectsByObjectType(objType: ObjectType): Promise<CustomObjectDto[]> {
        return await this.customObjectModel.find({ objectType: objType }).exec();
    }

    async findObjectById(id: Number): Promise<CustomObjectDto> {       
        return await this.customObjectModel.findOne({ id: id }).exec();
    }

    async removeAllObjects(): Promise<boolean> {
        var res = await this.customObjectModel.deleteMany({});
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }

    async removeAllObjectsByObjectType(objType: ObjectType): Promise<boolean> {
        var res = await this.customObjectModel.deleteMany({ objectType: objType });
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }

    async removeObjectById(id: Number): Promise<boolean> {
        var res = await this.customObjectModel.deleteOne({ id: id });
        if (res.deletedCount > 0) {
            return true;
        }

        return false;
    }
}
