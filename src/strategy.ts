import * as mongoose from 'mongoose';

import { Shop } from './api/shops/shop.model';

export class MongooseStrategy {
  private Shop: any;

  constructor(uri: string, options?: any, callback?: () => void) {
    mongoose.connect(
      uri,
      options,
      callback
    );

    this.Shop = Shop;
  }

  public async storeShop({ shop, accessToken }) {
    try {
      await this.Shop.create({
        shopify_domain: shop,
        access_token: accessToken
      });
    } catch (err) {
      console.log(err);
    }

    return { accessToken };
  }

  public async getShop({ shop }) {
    const result = await this.Shop.findOne({ shopify_domain: shop });
    return result || {};
  }
}
