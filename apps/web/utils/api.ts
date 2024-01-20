import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@repo/trpc";

export const trpc = createTRPCReact<AppRouter>();
export { type RouterInputs, type RouterOutputs } from "@repo/trpc";
