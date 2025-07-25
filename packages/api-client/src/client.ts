import { getEnvironmentConfig } from '@testsigmaprafull-org/config';
import { deepClone } from '@testsigmaprafull-org/utils';
import { ApiResponse, ApiError, RequestOptions, ApiConfig } from './types';

export class ApiClient {
  private config: ApiConfig;

  constructor(config?: Partial<ApiConfig>) {
    const envConfig = getEnvironmentConfig();
    this.config = {
      baseURL: envConfig.API_BASE_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    };
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const url = `${this.config.baseURL}${endpoint}`;
    const requestOptions: RequestOptions = {
      method: 'GET',
      headers: { ...this.config.headers, ...options.headers },
      timeout: this.config.timeout,
      ...options,
    };

    try {
      const response = await fetch(url, {
        method: requestOptions.method,
        headers: requestOptions.headers,
        body: requestOptions.body ? JSON.stringify(requestOptions.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        data: deepClone(data),
        status: response.status,
        message: 'Success',
        success: true,
      };
    } catch (error) {
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : 'Unknown error',
        code: 'API_ERROR',
        status: 500,
      };
      throw apiError;
    }
  }

  async get<T>(endpoint: string, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, body: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body });
  }

  async put<T>(endpoint: string, body: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body });
  }

  async delete<T>(endpoint: string, options?: Omit<RequestOptions, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
} 