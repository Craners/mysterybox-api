const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: 'your-shop-name',
    accessToken: 'your-oauth-token'
});

shopify.on('callLimits', limits => console.log(limits));
