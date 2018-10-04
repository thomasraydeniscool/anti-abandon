import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
  shopify_domain: {
    type: String,
    unique: true
  },
  access_token: {
    type: String
  },
  settings: {
    published: {
      type: Boolean,
      required: true,
      default: false
    },
    customization: {
      text: {
        header: {
          type: String
        },
        sub_header: {
          type: String
        }
      }
    },
    discounts: {
      codes: {
        type: [{ code: String, chance: Number }]
      }
    }
  }
});

export const Shop = mongoose.model('Shop', this.ShopSchema);

export default Shop;
