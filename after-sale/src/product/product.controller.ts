import { Controller, Get, Req, Query } from '@nestjs/common';
import { RepositoryService } from '../product/repository/repository.service';

@Controller('product')
export class ProductController {
    constructor(private readonly repo: RepositoryService) { }

    @Get()
    async list(@Query() query) {
        
        console.log(query.shop);
        
        return this.repo.list(query);
    }
}
