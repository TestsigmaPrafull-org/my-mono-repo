# Packages

This directory contains shared packages for the monorepo.

## Package Overview

### Core Packages (No Dependencies)

- **`@my-mono-repo/utils`** - Common utility functions
  - String, array, object, and date utilities
  - No dependencies on other workspace packages

- **`@my-mono-repo/config`** - Shared configuration
  - Environment, app, and database configuration
  - No dependencies on other workspace packages

### Dependent Packages

- **`@my-mono-repo/api-client`** - HTTP API client
  - Dependencies: `utils`, `config`
  - Provides HTTP client with type-safe responses

- **`@my-mono-repo/database`** - Database utilities
  - Dependencies: `utils`, `config`
  - Database connection management and data models

- **`@my-mono-repo/validation`** - Data validation
  - Dependencies: `utils`, `config`
  - Validation rules and predefined schemas

- **`@my-mono-repo/auth`** - Authentication system
  - Dependencies: `utils`, `config`, `api-client`, `database`
  - JWT authentication and permission management

## Dependency Graph

```
utils (no deps)
  ↑
config (no deps)
  ↑
api-client (utils, config)
  ↑
database (utils, config)
  ↑
validation (utils, config)
  ↑
auth (utils, config, api-client, database)
```

## Development

### Building Packages

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @my-mono-repo/utils build
```

### Development Mode

```bash
# Watch mode for all packages
pnpm dev

# Watch mode for specific package
pnpm --filter @my-mono-repo/utils dev
```

### Adding Dependencies

When adding dependencies between packages, use workspace protocol:

```json
{
  "dependencies": {
    "@my-mono-repo/utils": "workspace:*"
  }
}
```

## Package Structure

Each package follows this structure:

```
package-name/
├── src/
│   ├── index.ts          # Main exports
│   ├── [module].ts       # Individual modules
│   └── types.ts          # Type definitions
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Package documentation
``` 