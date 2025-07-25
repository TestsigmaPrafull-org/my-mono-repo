import { getEnvironmentConfig } from '@testsigmaprafull-org/config';
import { ApiClient, API_ENDPOINTS } from '@testsigmaprafull-org/api-client';
import { DatabaseManager } from '@testsigmaprafull-org/database';
import { generateToken, verifyToken } from './jwt';
import { checkPermission } from './permissions';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  user: User;
  token: string;
  refreshToken: string;
}

export class AuthManager {
  private apiClient: ApiClient;
  private dbManager: DatabaseManager;
  private currentUser: User | null = null;

  constructor() {
    this.apiClient = new ApiClient();
    this.dbManager = new DatabaseManager();
  }

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    try {
      const response = await this.apiClient.post<AuthResult>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );

      if (response.success) {
        this.currentUser = response.data.user;
        return response.data;
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw new Error(`Authentication error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async logout(): Promise<void> {
    if (this.currentUser) {
      try {
        await this.apiClient.post(API_ENDPOINTS.AUTH.LOGOUT, {});
      } catch (error) {
        console.warn('Logout API call failed:', error);
      }
      this.currentUser = null;
    }
  }

  async refreshToken(refreshToken: string): Promise<AuthResult> {
    try {
      const response = await this.apiClient.post<AuthResult>(
        API_ENDPOINTS.AUTH.REFRESH,
        { refreshToken }
      );

      if (response.success) {
        this.currentUser = response.data.user;
        return response.data;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      throw new Error(`Token refresh error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async verifyToken(token: string): Promise<User | null> {
    try {
      const decoded = verifyToken(token);
      if (decoded) {
        this.currentUser = decoded as unknown as User;
        return this.currentUser;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  hasPermission(permission: string): boolean {
    if (!this.currentUser) return false;
    return checkPermission(this.currentUser.permissions, permission);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
} 