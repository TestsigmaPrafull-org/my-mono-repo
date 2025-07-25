# @testsigmaprafull-org/utils

Common utility functions for the monorepo.

## Features

- **String utilities**: capitalize, toCamelCase, truncate
- **Array utilities**: unique, groupBy, chunk
- **Object utilities**: deepClone, pick, omit
- **Date utilities**: formatDate, isToday, daysBetween

## Usage

```typescript
import { capitalize, deepClone, unique } from '@testsigmaprafull-org/utils';

// String utilities
const result = capitalize('hello world'); // 'Hello world'

// Object utilities
const cloned = deepClone({ name: 'John', age: 30 });

// Array utilities
const uniqueItems = unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

## Dependencies

This package has no dependencies on other workspace packages.

## Build

```bash
pnpm build
``` 