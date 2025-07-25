export interface Permission {
  resource: string;
  action: string;
}

export function checkPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.includes(requiredPermission);
}

export function checkResourcePermission(
  userPermissions: string[],
  resource: string,
  action: string
): boolean {
  const permission = `${resource}:${action}`;
  return checkPermission(userPermissions, permission);
}

export function hasAnyPermission(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.some(permission => checkPermission(userPermissions, permission));
}

export function hasAllPermissions(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.every(permission => checkPermission(userPermissions, permission));
}

export const PERMISSIONS = {
  USERS: {
    READ: 'users:read',
    WRITE: 'users:write',
    DELETE: 'users:delete',
  },
  POSTS: {
    READ: 'posts:read',
    WRITE: 'posts:write',
    DELETE: 'posts:delete',
  },
  COMMENTS: {
    READ: 'comments:read',
    WRITE: 'comments:write',
    DELETE: 'comments:delete',
  },
  ADMIN: {
    ALL: 'admin:all',
  },
} as const; 