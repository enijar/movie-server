import { z } from "zod";

const env = z.object({
  PORT: z.string(),
  CMS_URL: z.string(),
  CMS_API_TOKEN: z.string(),
});

env.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}

const config = {
  port: parseInt(process.env.PORT),
  cmsUrl: process.env.CMS_URL,
  cmsApiToken: process.env.CMS_API_TOKEN,
} as const;

export default config;
