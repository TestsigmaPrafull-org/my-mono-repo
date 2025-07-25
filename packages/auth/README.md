# @testsigmaprafull-org/auth

Authentication utilities for the monorepo.

## Features

- **Authentication management**: Login, logout, token refresh
- **JWT utilities**: Token generation and verification
- **Permission system**: Role-based access control
- **Integration**: Works with API client and database

## Usage

```typescript
import { AuthManager, PERMISSIONS } from '@testsigmaprafull-org/auth';

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

- `@testsigmaprafull-org/utils`: For utility functions
- `@testsigmaprafull-org/config`: For JWT configuration
- `@testsigmaprafull-org/api-client`: For authentication API calls
- `@testsigmaprafull-org/database`: For user data management

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