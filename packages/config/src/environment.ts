/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Environment configuration management
 */

export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  DATABASE_URL: string;
  API_BASE_URL: string;
  JWT_SECRET: string;
}

export const getEnvironmentConfig = (): EnvironmentConfig => {
  return {
    NODE_ENV: (process.env.NODE_ENV as EnvironmentConfig['NODE_ENV']) || 'development',
    PORT: parseInt(process.env.PORT || '3000', 10),
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://localhost:5432/myapp',
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/api',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  };
}; 