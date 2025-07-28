/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Database configuration management
 */

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
  pool: {
    min: number;
    max: number;
  };
}

export const getDatabaseConfig = (): DatabaseConfig => {
  return {
    host: 'localhost',
    port: 5432,
    database: 'myapp',
    username: 'postgres',
    password: 'password',
    ssl: false,
    pool: {
      min: 2,
      max: 10,
    },
  };
}; 