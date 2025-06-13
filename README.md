# Art & Culture Backend

This repository contains an Express API server that uses Prisma for database access. The codebase targets **Node.js 18**.
Portions of the backend are gradually being migrated to **TypeScript** for improved type safety.

## Setup

1. Install dependencies:
   ```bash
   cd server
   npm install
   # if you encounter peer dependency warnings
   npm install --legacy-peer-deps
   ```
2. Create a `.env` file in the `server` folder based on `server/.env.sample` and set all required environment variables.
3. Generate the Prisma client and apply migrations if needed:
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Tests and Linting

Dev dependencies such as Jest and ESLint are installed with `npm install` in the `server` directory. Run the following commands from **inside** the `server` folder:

```bash
cd server
npm run lint
npm test
```

The `test` script executes `jest --runInBand`, so your tests are run sequentially. Both commands require the dependencies to be installed locally.

## File Uploads

Uploaded files are stored under `server/uploads/` which is ignored by Git.

## Logging

The backend uses **Winston** for centralized logging. Errors are captured by a
dedicated middleware that returns a consistent JSON structure and writes details
to the logger.

## Environment

The example environment file `server/.env.sample` lists all variables required to run the server. Create your own `.env` with database credentials, JWT secrets and mail settings before starting the server.

## License

This project is licensed under the MIT License.
