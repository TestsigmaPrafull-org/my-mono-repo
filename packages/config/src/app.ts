/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Application configuration management
 */

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  cors: {
    origin: string[];
    credentials: boolean;
  };
  rateLimit: {
    windowMs: number;
    max: number;
  };
}

export const getAppConfig = (): AppConfig => {
  return {
    name: 'My Monorepo App',
    version: '1.0.0',
    description: 'A monorepo application',
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:3001'],
      credentials: true,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
  };
}; 