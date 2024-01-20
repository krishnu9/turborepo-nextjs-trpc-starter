"use client"

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../utils/api";
import { getUrl } from "../utils/url";
import superjson from "superjson";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { getBaseUrl, getUrl } from "@repo/trpc";

// export const trpc = createTRPCReact<AppRouter>();

export function TRPCReactProvider(props: {
    children: React.ReactNode
}) {

    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
    trpc.createClient({
        transformer: superjson,
        links: [
            loggerLink({
                enabled: (opts) => process.env.NODE_ENV === "development" ||
                (opts.direction === "down" && opts.result instanceof Error),
            }),
            unstable_httpBatchStreamLink({
                url: getUrl(),
            }),
        ],
    }));

    return (
        <QueryClientProvider client={queryClient} >
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                {/* <ReactQueryStreamedHydration transformer={superjson}> */}
                {props.children}
                {/* </ReactQueryStreamedHydration> */}
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </trpc.Provider>
        </QueryClientProvider>
    );
}