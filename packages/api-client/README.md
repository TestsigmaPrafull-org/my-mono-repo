<!-- DUMMY COMMENT: This is a copied package for testing purposes -->

# @testsigmaprafull-org/api-client

API client for the monorepo.

## Features

- **HTTP client**: GET, POST, PUT, DELETE methods
- **Type-safe responses**: Generic response types
- **Error handling**: Structured error responses
- **Configuration**: Uses shared config package

## Usage

```typescript
import { ApiClient, API_ENDPOINTS } from '@testsigmaprafull-org/api-client';

const client = new ApiClient();

// GET request
const users = await client.get('/users');

// POST request
const newUser = await client.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// Using predefined endpoints
const posts = await client.get(API_ENDPOINTS.POSTS.LIST);
```

## Dependencies

- `@testsigmaprafull-org/utils`: For utility functions (deepClone)
- `@testsigmaprafull-org/config`: For API configuration

## API Endpoints

Predefined endpoints are available:

```typescript
API_ENDPOINTS.USERS.LIST        // '/users'
API_ENDPOINTS.USERS.GET('123')  // '/users/123'
API_ENDPOINTS.AUTH.LOGIN        // '/auth/login'
```

## Build

```bash
pnpm build
``` 