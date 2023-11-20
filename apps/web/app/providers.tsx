"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import superjson from "superjson";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { api } from "../utils/api";


// const getBaseUrl = () => {
//     if (typeof window === "undefined") return "";
//     if (env.VERCEL_URL) return env.VERCEL_URL;

//     return `http://localhost:${env.PORT}`;
// };

export function TRPCReactProvider(props: {
    children: React.ReactNode;
    headers?: Headers;
}): JSX.Element {
    const [queryClient, setQueryClient] = useState(
        () => new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 5 * 1000,
                },
            },
        }),
    )

    const [trpcClient, setTrpcClient] = useState(() => 
        api.createClient({
            transformer: superjson,
            links: [
                loggerLink({
                    enabled: (opts) =>
                        true
                }),
                unstable_httpBatchStreamLink({
                    url: "http://localhost:3000/api/trpc",
                    headers() {
                        const headers = new Map(props.headers);
                        headers.set("x-trpc-source", "nextjs-react");
                        return Object.fromEntries(headers);
                    },
                }),
            ],
        }),
    );

    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryStreamedHydration transformer={superjson}>
                    {props.children}
                </ReactQueryStreamedHydration>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </api.Provider>
    )
}