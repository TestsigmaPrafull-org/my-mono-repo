# @my-mono-repo/validation

Validation utilities for the monorepo.

## Features

- **Validation rules**: Required, email, length, pattern, number validation
- **Predefined schemas**: User, Post, Comment validation schemas
- **Error handling**: Structured validation errors
- **Integration**: Uses utility functions for formatting

## Usage

```typescript
import { Validator, USER_SCHEMA } from '@my-mono-repo/validation';

const validator = new Validator();

// Validate email
validator.validateEmail('user@example.com', 'email');

// Validate required field
validator.validateRequired('John Doe', 'name');

// Get validation result
const result = validator.getResult();
if (!result.isValid) {
  console.log(result.errors);
}
```

## Dependencies

- `@my-mono-repo/utils`: For utility functions (truncate)
- `@my-mono-repo/config`: For validation configuration

## Predefined Schemas

The package includes validation schemas for:

- `USER_SCHEMA`: User registration/update validation
- `POST_SCHEMA`: Blog post validation
- `COMMENT_SCHEMA`: Comment validation

## Validation Rules

Available validation rules:

- `required`: Field must be present and non-empty
- `email`: Valid email format
- `minLength`: Minimum string length
- `maxLength`: Maximum string length
- `pattern`: Regular expression pattern
- `number`: Numeric value validation
- `min`: Minimum numeric value
- `max`: Maximum numeric value

## Build

```bash
pnpm build
``` 