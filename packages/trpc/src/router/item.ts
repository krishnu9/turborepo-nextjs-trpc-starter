import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const itemRouter = createTRPCRouter({
    all: publicProcedure
    .query(({ ctx }) => {
        return ctx.prisma.item.findMany({orderBy: {id: "desc"}})
    }),
    create: publicProcedure
    .input(z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
    }))
    .mutation(({ ctx, input }) => {
        console.log("input", input);
        console.log("session", ctx.session);
        console.log("Hello from create item tRPC handler");
        return ctx.prisma.item.create({
            data: {
                name: input.name,
                description: input.description,
                price: input.price,
            },
        })
    }),
    sign: protectedProcedure
    .query(({ ctx }) => {
        console.log("Hello from tRPC protected procedure..");
        console.log("user ", ctx.session.user);
        return ctx.session.user;
    }),        
});