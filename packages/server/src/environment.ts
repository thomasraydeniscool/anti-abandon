import { cleanEnv, str, num, bool } from 'envalid';

export const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  ORIGIN: str({ default: 'http://localhost:3000' }),
  SHOPIFY_KEY: str(),
  SHOPIFY_SECRET: str(),
  DATABASE: str(),
  DEVELOPMENT: bool({ default: true })
});

export default env;
