import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
  shopify_domain: {
    type: String,
    unique: true
  },
  access_token: {
    type: String
  }
});

export const Shop = mongoose.model('Shop', this.ShopSchema);

export default Shop;
