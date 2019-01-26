import { Injectable, Res, Req } from '@nestjs/common';
import { ConfigService } from 'src/config.service';

@Injectable()
export class InitService {
    
    private DATABASE_USER: string;
    constructor(config: ConfigService) {
        this.DATABASE_USER = config.get('DATABASE_USER');
    }

    init(): string {
        return 'init the repo';
    }

    confused(shop: string): any {

        console.log(this.DATABASE_USER);
        
        return 'im here and this is the shop:' + shop;
        // var shop = req.query.shop;
        // var appId = process.env.appId;

        // var appSecret = process.env.appSecret;
        // var appScope = process.env.appScope;
        // var appDomain = process.env.appDomain;

        // //build the url
        // var installUrl = `https://${shop}/admin/oauth/authorize?client_id=${appId}&scope=${appScope}&redirect_uri=https://${appDomain}/shopify/auth`;

        // if (process.env.appStoreTokenTest.length > 0) {
        //     res.redirect('/shopify/app?shop=' + shop);
        // } else {
        //     //go here if you don't have the token yet
        //     res.redirect(installUrl);
        // }
    }
}
