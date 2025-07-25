# @my-mono-repo/auth

Authentication utilities for the monorepo.

## Features

- **Authentication management**: Login, logout, token refresh
- **JWT utilities**: Token generation and verification
- **Permission system**: Role-based access control
- **Integration**: Works with API client and database

## Usage

```typescript
import { AuthManager, PERMISSIONS } from '@my-mono-repo/auth';

const authManager = new AuthManager();

// Login
const result = await authManager.login({
  email: 'user@example.com',
  password: 'password123'
});

// Check permissions
if (authManager.hasPermission(PERMISSIONS.USERS.READ)) {
  // User can read users
}

// Verify token
const user = await authManager.verifyToken(token);
```

## Dependencies

- `@my-mono-repo/utils`: For utility functions
- `@my-mono-repo/config`: For JWT configuration
- `@my-mono-repo/api-client`: For authentication API calls
- `@my-mono-repo/database`: For user data management

## Permissions

Predefined permissions are available:

```typescript
PERMISSIONS.USERS.READ    // 'users:read'
PERMISSIONS.POSTS.WRITE   // 'posts:write'
PERMISSIONS.ADMIN.ALL     // 'admin:all'
```

## Build

```bash
pnpm build
``` 