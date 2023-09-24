import { config } from 'dotenv';
import { cleanEnv, str } from 'envalid';
import { join } from 'path';

config();

export const env = cleanEnv(process.env, {
    CHAT_ENGINE_PRIVATE_KEY: str(),
  });