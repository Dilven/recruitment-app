/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com"],
  },
  serverRuntimeConfig: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_INTERNAL_API_TIMEOUT:
      process.env.NEXT_PUBLIC_INTERNAL_API_TIMEOUT,
    PLAYLIST_ITEMS_API_URL:
      process.env.PLAYLIST_ITEMS_API_URL,
  },
};
