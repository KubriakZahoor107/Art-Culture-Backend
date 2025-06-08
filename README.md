# Art & Culture

This project uses **Next.js** for server-side rendering (SSR).

The codebase is tested with **Node.js 18.x**. If you use `nvm`, run `nvm use` in
the project directory to ensure the correct version.

## Getting Started

This project requires Node 18 or later. Install dependencies and create a local `.env` file based on `.env.sample`:

```bash
npm install
```

If you see peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

Tests rely on an up-to-date `package-lock.json`.


## Environment Variables

Copy `.env.sample` to `.env` and update the values as needed.

- `DATABASE_URL` – connection string for PostgreSQL
- `REDIS_URL` or `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`
- `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET`
- `NEXTAUTH_SECRET` and provider credentials like `GITHUB_ID`/`GITHUB_SECRET`
- `NEXT_PUBLIC_HOST` – hostname used when rendering on the server

## NextAuth

Ensure the environment variables above are set. Start the development server and open `/api/auth/signin` to test authentication.

## Development

Run the development server:

```bash
npm run dev
```

## Production

Build and start the production server:

```bash
npm run build
npm start
```


## Testing

Run all tests once:

```bash
npm test
```

To continually run tests as files change, use watch mode:

```bash
npm run test:watch
```

## SEO

SEO metadata is defined in [`src/meta/index.js`](src/meta/index.js).

## Middleware and SSR

The middleware in [`middleware.ts`](middleware.ts) now detects the locale from the
URL. Requests without a locale prefix are redirected to `/uk` by default and an
`X-Art-Culture` header is added to all responses.

A demo SSR page is available at [`src/pages/ssr.js`](src/pages/ssr.js) which uses `getServerSideProps` to select a random news item on each request.

## Static Regeneration

News pages are pre-rendered at build time but regenerate periodically. The
`revalidate` export in [`src/app/news/[id]/page.tsx`](src/app/news/%5Bid%5D/page.tsx)
instructs Next.js to refresh the static content every 60 seconds.

For information on obtaining sample SQL dumps see [docs/SAMPLE_DATA.md](docs/SAMPLE_DATA.md).
## Deploying to GCP

The `.env.example` file lists all variables needed in production. When creating a Cloud Run service, add these keys under **Environment Variables** or load them from Secret Manager. Set `NEXT_PUBLIC_HOST` to `art.playukraine.com` because the frontend is served from `https://art.playukraine.com` and all API routes live under `/api` on the same host.

### Build and push the image
```bash
docker build -t REGION-docker.pkg.dev/PROJECT_ID/art-culture/app:latest .
docker push REGION-docker.pkg.dev/PROJECT_ID/art-culture/app:latest
```
You can then deploy via Cloud Run or the Google Cloud Console. The command
below assumes the image was pushed to Artifact Registry:
```bash
gcloud run deploy art-culture \
  --image REGION-docker.pkg.dev/PROJECT_ID/art-culture/app:latest \
  --region REGION \
  --platform managed \
  --set-env-vars $(grep -v '^#' .env.example | xargs)
```
Alternatively you can deploy directly from source without pushing an image:
```bash
gcloud run deploy --source . \
  --region REGION \
  --set-env-vars $(grep -v '^#' .env.example | xargs)
```

## License

This project is licensed under the [MIT License](LICENSE).
