# @my-mono-repo/database

Database utilities for the monorepo.

## Features

- **Database connection management**: Connect/disconnect operations
- **Data models**: User, Post, Comment interfaces
- **Migration system**: Database migration utilities
- **Configuration**: Uses shared config package

## Usage

```typescript
import { DatabaseManager, MigrationManager } from '@my-mono-repo/database';

// Database connection
const dbManager = new DatabaseManager();
await dbManager.connect();

// Check connection status
const isConnected = dbManager.isConnectedToDatabase();

// Migration management
const migrationManager = new MigrationManager();
await migrationManager.runMigrations();
```

## Dependencies

- `@my-mono-repo/utils`: For utility functions (deepClone)
- `@my-mono-repo/config`: For database configuration

## Data Models

The package includes TypeScript interfaces for:

- `User`: User data model
- `Post`: Blog post data model
- `Comment`: Comment data model
- `DatabaseSchema`: Complete database schema

## Build

```bash
pnpm build
``` 