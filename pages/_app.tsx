import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { defaultOptions } from '@/config/cache'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
