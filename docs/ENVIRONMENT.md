# Environment Variables

The application relies on the following environment variables. Copy `.env.example` or `.env.sample` to `.env` and adjust values as required.

| Variable | Description |
| --- | --- |
| `API_BASE_URL` | Base URL for server-side API requests when rendering on the server. |
| `NEXT_PUBLIC_API_URL` | Base URL exposed to the browser for client-side requests. |
| `REACT_APP_API_URL` | Alternative API base URL used by some components. |
| `NEXT_PUBLIC_PROD_API_URL` | (optional) Production API URL if different from `NEXT_PUBLIC_API_URL`. |
| `NEXT_PUBLIC_HOST` | Hostname used when rendering on the server. |
| `NEXT_PUBLIC_DEFAULT_WIDTH` | Default width for image components. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics identifier. |
| `DATABASE_URL` | Connection string for PostgreSQL. |
| `REDIS_URL` | Redis connection string. |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST API URL. |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST API token. |
| `SHOPIFY_API_KEY` | Shopify API key. |
| `SHOPIFY_API_SECRET` | Shopify API secret. |
| `NEXTAUTH_SECRET` | Secret used by NextAuth for signing tokens. |
| `GITHUB_ID` | GitHub OAuth app client ID. |
| `GITHUB_SECRET` | GitHub OAuth app client secret. |
| `TOKEN` | API token used on the server when no client token is available. |

