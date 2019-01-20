'use strict';
// const isomorphicFetch = require('isomorphic-fetch');
const Koa = require('Koa');
const session = require('koa-session');
const shopifyAuth = require('@shopify/koa-shopify-auth');
const verifyRequest = require('@shopify/koa-shopify-auth');
require('dotenv').config()

module.exports = function (Auth) {



    const { SHOPIFY_API_KEY, SHOPIFY_SECRET } = process.env;

    const app = new Koa();
    app.keys = [SHOPIFY_SECRET];

    app
        // sets up secure session data on each request
        .use(session(app))

        // sets up shopify auth
        .use(
            shopifyAuth({
                apiKey: SHOPIFY_API_KEY,
                secret: SHOPIFY_SECRET,
                scopes: ['write_orders, write_products'],
                afterAuth(ctx) {
                    const { shop, accessToken } = ctx.session;

                    console.log('We did it!', accessToken);

                    ctx.redirect('/');
                },
            }),
        )

        // everything after this point will require authentication
        .use(verifyRequest())

        // application code
        .use(ctx => {
            ctx.body = '🎉';
        });
};