import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config.service';
var request = require('request-promise');

@Injectable()
export class RepositoryService {
    private appStoreTokenTest: string;

    constructor(config: ConfigService) {

        this.appStoreTokenTest = config.get('appStoreTokenTest');
    }

    async list(query: any): Promise<any> {

        let url = 'https://' + query.shop + '/admin/products.json';

        let options = {
            method: 'GET',
            uri: url,
            json: true,
            headers: {
                'X-Shopify-Access-Token': this.appStoreTokenTest,
                'content-type': 'application/json'
            }
        };

        return await request(options)
            .then(function (parsedBody) {
                console.log(parsedBody);
                (parsedBody);
            })
            .catch(function (err) {
                console.log(err);
                (err);
            });

        return 'List of Products';
    }
}
