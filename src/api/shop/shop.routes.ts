import {
  Router,
  IRouteGet,
  RequestType,
  IRoutePatch,
  IRoutePost
} from '../../lib/Router';

const GET: IRouteGet[] = [
  {
    type: RequestType.GET,
    path: '/show',
    steps: [
      async (req, res) => {
        res.end('hello');
      }
    ]
  }
];

export const ShopRouter = new Router(GET);
