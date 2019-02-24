import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Verify } from '../utils/verify';
var url = require('url');
var request = require('request-promise');
import { ConfigService } from 'src/config.service';

@Injectable()
export class AuthenticationService {
    private DATABASE_USER: string;
    private SHOPIFY_API_SECRET_KEY: string;
    private SHOPIFY_API_KEY: string;
    private APP_SCOPE: string;
    private APP_DOMAIN: string;
    private verify: Verify;
    private appStoreTokenTest: string;
    public FE_DOMAIN: string;

    constructor(config?: ConfigService) {
        this.DATABASE_USER = config.get('DATABASE_USER');
        this.SHOPIFY_API_SECRET_KEY = config.get('SHOPIFY_API_SECRET_KEY');
        this.SHOPIFY_API_KEY = config.get('SHOPIFY_API_KEY');
        this.APP_SCOPE = config.get('APP_SCOPE');
        this.APP_DOMAIN = config.get('APP_DOMAIN');
        this.appStoreTokenTest = config.get('appStoreTokenTest');
        this.FE_DOMAIN = config.get('FE_DOMAIN');
        this.verify = new Verify(config);
    }

    install(req: any): any {
        var shop = req.query.shop;
        var appId = this.SHOPIFY_API_KEY;

        var appSecret = this.SHOPIFY_API_SECRET_KEY;
        var appScope = this.APP_SCOPE;

        //build the url
        var installUrl = `https://${shop}/admin/oauth/authorize?client_id=${appId}&scope=${appScope}&redirect_uri=https://${this.APP_DOMAIN}/authentication`;

        return installUrl;
    }

    async auth(req: any): Promise<any> {
        let securityPass = false;
        let appId = this.SHOPIFY_API_KEY;
        let appSecret = this.SHOPIFY_API_SECRET_KEY;
        let shop = req.query.shop;
        let code = req.query.code;

        const regex = /^[a-z\d_.-]+[.]myshopify[.]com$/;

        if (shop.match(regex)) {
            console.log('regex is ok');
            securityPass = true;
        } else {
            //exit
            securityPass = false;
        }

        // 1. Parse the string URL to object
        let urlObj = url.parse(req.url);
        // 2. Get the 'query string' portion
        let query = urlObj.search.slice(1);
        if (this.verify.verifyHmac(query)) {
            //get token
            console.log('get token');
            securityPass = true;
        } else {
            //exit
            securityPass = false;
        }

        if (securityPass && regex) {

            //Exchange temporary code for a permanent access token
            let accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
            let accessTokenPayload = {
                client_id: appId,
                client_secret: appSecret,
                code,
            };

            return await request.post(accessTokenRequestUrl, { json: accessTokenPayload })
                .then((accessTokenResponse) => {
                    let accessToken = accessTokenResponse.access_token;
                    console.log(accessToken);
                    
                    return `/authentication/app?shop=${shop}`;
                })
                .catch((error) => {
                    return error.statusCode; //.send(error.error.error_description);
                });
        }
        // else {
        //     res.redirect('/installerror');
        // }
    }
}
