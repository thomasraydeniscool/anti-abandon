import * as dotenv from 'dotenv';
dotenv.config();

import * as path from 'path';

import * as express from 'express';
import * as expressSession from 'express-session';
import * as morgan from 'morgan';

import * as ShopifyExpress from 'shopify-express';
import * as ShopifyClient from 'shopify-api-node';

import { env } from './environment';
import { MongooseStrategy } from './strategy';
import { ShopRouter } from './api/shops/shop.routes';

const app = express();

const shopify = ShopifyExpress({
  host: env.ORIGIN,
  apiKey: env.SHOPIFY_KEY,
  secret: env.SHOPIFY_SECRET,
  scope: ['write_orders, write_products'],
  afterAuth(req, res) {
    const { session } = req;
    const { shop, accessToken } = session;
    /**
     * Install webhooks or hook into your own app here
     */
    return res.redirect('/');
  },
  shopStore: new MongooseStrategy(env.DATABASE, { useNewUrlParser: true })
});

/**
 * Middleware
 */
app.use(morgan('dev'));
app.use(
  expressSession({
    secret: env.SHOPIFY_SECRET,
    resave: true,
    saveUninitialized: false
  })
);

/**
 * View Engine
 */
app.use(express.static(path.resolve(__dirname, './public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Routes
 */
app.use('/shopify', shopify.routes);

app.use('/shops', ShopRouter.routes);

app.get(
  '/',
  shopify.middleware.withShop({ authBaseUrl: '/shopify' }),
  (req, res) => {
    const { session } = req;
    const { shop, accessToken } = session;
    res.render('app', {
      development: env.DEVELOPMENT,
      origin: env.ORIGIN,
      apiKey: env.SHOPIFY_KEY,
      shop
    });
  }
);

app.get('/install', (req, res) => res.render('install'));

/**
 * Start server
 */
app.listen(env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${env.PORT}`);
});
