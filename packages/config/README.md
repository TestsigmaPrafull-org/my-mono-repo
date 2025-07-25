# @my-mono-repo/config

Shared configuration for the monorepo.

## Features

- **Environment configuration**: NODE_ENV, PORT, DATABASE_URL, etc.
- **App configuration**: CORS, rate limiting, app metadata
- **Database configuration**: Connection settings, pool configuration

## Usage

```typescript
import { getEnvironmentConfig, getAppConfig, getDatabaseConfig } from '@my-mono-repo/config';

// Environment configuration
const env = getEnvironmentConfig();
console.log(env.PORT); // 3000

// App configuration
const app = getAppConfig();
console.log(app.name); // 'My Monorepo App'

// Database configuration
const db = getDatabaseConfig();
console.log(db.host); // 'localhost'
```

## Dependencies

This package has no dependencies on other workspace packages.

## Environment Variables

The following environment variables are supported:

- `NODE_ENV`: Environment (development, production, test)
- `PORT`: Server port
- `DATABASE_URL`: Database connection string
- `API_BASE_URL`: API base URL
- `JWT_SECRET`: JWT secret key

## Build

```bash
pnpm build
``` 