import {
  Router,
  IRouteGet,
  RequestType,
  IRoutePatch,
  IRoutePost
} from '../../lib/Router';
import { Shop } from './shop.model';
import { ApiNotFound } from '../../lib/ApiNotFound';
import { ApiSuccess } from '../../lib/ApiSuccess';
import { env } from '../../environment';

const GET: IRouteGet[] = [
  {
    type: RequestType.GET,
    path: '/:shopify_domain',
    steps: [
      async (req, res) => {
        const { params } = req;
        const { shopify_domain } = params;
        const shop = await Shop.findOne({ shopify_domain });
        if (!shop) {
          throw new ApiNotFound(res);
        }
        return new ApiSuccess(res, shop);
      }
    ]
  },
  {
    type: RequestType.GET,
    path: '/',
    steps: [
      async (req, res) => {
        return new ApiSuccess(res, 'hello world!');
      }
    ]
  }
];

const PATCH: IRoutePatch[] = [
  {
    type: RequestType.PATCH,
    path: '/:shop_id',
    steps: [
      async (req, res) => {
        const { body, params } = req;
        const { shop_id } = params;
        const shop = await Shop.findById(shop_id);
        if (!shop) {
          throw new ApiNotFound(res);
        }
        const updated = await { ...shop, ...body }.save();
        return new ApiSuccess(res, updated);
      }
    ]
  }
];

export const ShopRouter = new Router(GET, PATCH);
