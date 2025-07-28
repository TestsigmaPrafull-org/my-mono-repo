/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * API client type definitions
 */

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
} 