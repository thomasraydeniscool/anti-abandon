import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';

import * as mongoose from 'mongoose';

import * as ShopifyExpress from 'shopify-express';
import * as ShopifyClient from 'shopify-api-node';

import { env } from './environment';

const app = express();

app.use(session({ secret: env.SHOPIFY_SECRET }));

class MongooseStrategy {
  private Shop: any;
  private ShopSchema: any;

  constructor(uri: string, options?: any, callback?: () => void) {
    mongoose.connect(
      uri,
      options,
      callback
    );

    this.ShopSchema = new mongoose.Schema({
      shopify_domain: {
        type: String,
        unique: true
      },
      access_token: {
        type: String
      }
    });

    this.Shop = mongoose.model('Shop', this.ShopSchema);
  }

  public async storeShop({ shop, accessToken }) {
    await this.Shop.create({ shopify_domain: shop, access_token: accessToken });

    return { accessToken };
  }

  public async getShop({ shop }) {
    const result = await this.Shop.findOne({ shopify_domain: shop });
    return result || {};
  }
}

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
  shopStore: new MongooseStrategy(env.DATABASE)
});

app.use('/shopify', shopify.routes);

app.listen(env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${env.PORT}`);
});
