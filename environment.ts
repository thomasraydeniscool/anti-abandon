import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
  SHOPIFY_KEY: str(),
  SPOPIFY_SECRET: str()
});

export default env;
