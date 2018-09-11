import { cleanEnv, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  ORIGIN: str({ default: '' }),
  SHOPIFY_KEY: str(),
  SPOPIFY_SECRET: str()
});

export default env;
