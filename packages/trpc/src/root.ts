import { itemRouter } from "./router/item";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
    item: itemRouter,
});

export type AppRouter = typeof appRouter;