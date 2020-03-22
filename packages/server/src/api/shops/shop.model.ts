import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
  shopify_domain: {
    type: String,
    unique: true,
    required: true
  },
  access_token: {
    type: String,
    required: true
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
          type: String,
          default: 'Pick a card'
        },
        sub_header: {
          type: String,
          default: 'You could win up to 50% off!'
        }
      }
    },
    discounts: {
      codes: {
        type: [{ code: String, chance: Number }],
        default: []
      }
    }
  }
});

export const Shop = mongoose.model('Shop', this.ShopSchema);

export default Shop;
