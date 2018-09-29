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
    path: '/',
    steps: [
      async (req, res) => {
        res.end('hello world');
      }
    ]
  }
];

const PATCH: IRoutePatch[] = [
  {
    type: RequestType.PATCH,
    path: '/:shopId',
    steps: [
      async (req, res) => {
        const { body, params } = req;
        const { shopId } = params;
        const shop = await Shop.findOne({ shopId });
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
