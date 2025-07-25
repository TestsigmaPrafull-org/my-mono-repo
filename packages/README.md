# Packages

This directory contains shared packages for the monorepo.

## Package Overview

### Core Packages (No Dependencies)

- **`@testsigmaprafull-org/utils`** - Common utility functions
  - String, array, object, and date utilities
  - No dependencies on other workspace packages

- **`@testsigmaprafull-org/config`** - Shared configuration
  - Environment, app, and database configuration
  - No dependencies on other workspace packages

### Dependent Packages

- **`@testsigmaprafull-org/api-client`** - HTTP API client
  - Dependencies: `utils`, `config`
  - Provides HTTP client with type-safe responses

- **`@testsigmaprafull-org/database`** - Database utilities
  - Dependencies: `utils`, `config`
  - Database connection management and data models

- **`@testsigmaprafull-org/validation`** - Data validation
  - Dependencies: `utils`, `config`
  - Validation rules and predefined schemas

- **`@testsigmaprafull-org/auth`** - Authentication system
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
pnpm --filter @testsigmaprafull-org/utils build
```

### Development Mode

```bash
# Watch mode for all packages
pnpm dev

# Watch mode for specific package
pnpm --filter @testsigmaprafull-org/utils dev
```

### Adding Dependencies

When adding dependencies between packages, use workspace protocol:

```json
{
  "dependencies": {
    "@testsigmaprafull-org/utils": "workspace:*"
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