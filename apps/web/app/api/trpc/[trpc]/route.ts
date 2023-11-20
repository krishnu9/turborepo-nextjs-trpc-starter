import { appRouter, createTRPCContext } from "trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { handlers } from "auth";
import { NextRequest } from "next/server";

function setCorsHeaders(res: Response): void  {
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Request-Method", "*");
    res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.headers.set("Access-Control-Allow-Headers", "*");
}

export function OPTIONS(): Response {
        const response = new Response(null, {
            status: 204,
        });
        setCorsHeaders(response);
        return response;
}

const handler = async (req: NextRequest): Promise<Response> => {
    const response = await fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => createTRPCContext({req}),
        onError:
        process.env.NODE_ENV === "development"
          ? ({ path, error }) => {
              console.error(
                `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
              );
            }
          : undefined,
  
    });
    setCorsHeaders(response);
    return response;
};


export { handler as GET, handler as POST } 