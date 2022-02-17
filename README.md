## About
Recruitment-app

## Youtube api docs
https://developers.google.com/youtube/v3/docs/playlistItems/list

## Getting Started

First, install packages

```bash
npm i
# or
yarn
```

Add YOUTUBE_API_KEY to .env.local

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Env variables

- env (public enviroment variables, contains all the default env variables that are used when building the project)
- env.example (example how should look env.local)
- env.local (secrets for production instances which shouldn't be published - use for start application without docker)

if you want to add env variables you need to edit next.js file and add variables to .env/.env.local etc file. Then if you want to use helper for env variable you need to add types to @/config/config file
