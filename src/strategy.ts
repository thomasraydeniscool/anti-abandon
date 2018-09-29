import * as mongoose from 'mongoose';

import { Shop } from './api/shop/shop.model';

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
    await this.Shop.create({ shopify_domain: shop, access_token: accessToken });

    return { accessToken };
  }

  public async getShop({ shop }) {
    const result = await this.Shop.findOne({ shopify_domain: shop });
    return result || {};
  }
}
