import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';

import * as ShopifyExpress from 'shopify-express';
import * as ShopifyClient from 'shopify-api-node';

import { env } from './environment';
import { MongooseStrategy } from './strategy';
import { ShopRouter } from './api/shop/shop.routes';

const app = express();

app.use(session({ secret: env.SHOPIFY_SECRET }));

const shopify = ShopifyExpress({
  host: env.ORIGIN,
  apiKey: env.SHOPIFY_KEY,
  secret: env.SHOPIFY_SECRET,
  scope: ['write_orders, write_products'],
  afterAuth(req, res) {
    const {
      session: { shop, accessToken }
    } = req;
    /**
     * Install webhooks or hook into your own app here
     */
    return res.redirect('/');
  },
  shopStore: new MongooseStrategy(env.DATABASE, { useNewUrlParser: true })
});

app.use('/shopify', shopify.routes);

app.use('/shop', ShopRouter.routes);

app.listen(env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${env.PORT}`);
});
