export const API_ENDPOINTS = {
  USERS: {
    LIST: '/users',
    CREATE: '/users',
    GET: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },
  POSTS: {
    LIST: '/posts',
    CREATE: '/posts',
    GET: (id: string) => `/posts/${id}`,
    UPDATE: (id: string) => `/posts/${id}`,
    DELETE: (id: string) => `/posts/${id}`,
  },
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
  },
} as const; 