import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultOptions } from "@/config/cache";
import { ReactQueryDevtools } from "react-query/devtools";
import { PlaylistIdProvider } from "@/hooks/usePlaylistId";

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PlaylistIdProvider>
        <Component {...pageProps} />
      </PlaylistIdProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
