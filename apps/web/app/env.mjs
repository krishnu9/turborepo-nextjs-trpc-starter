import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    shared: {
        VERCEL_URL: z.string().optional().transform((v) => ( v ? `https://${v}` : undefined )),
        PORT: z.coerce.number().default(3000),
    },
    server: {
        DATABASE_URL: z.string().url(),
    },
    client: {
        // NEXT_PUBLIC_CLIENTVAR: z.string(),
    },
    runtimeEnv: {
        VERCEL_URL: process.env.VERCEL_URL,
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
    },
    skipValidation: Boolean(process.env.CI) || Boolean(process.env.SKIP_ENV_VALIDATION) || process.env.npm_lifecycle_event === "lint",
});