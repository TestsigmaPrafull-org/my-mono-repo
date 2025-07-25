import { getEnvironmentConfig } from '@testsigmaprafull-org/config';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  permissions: string[];
  exp: number;
  iat: number;
}

export function generateToken(payload: Omit<JWTPayload, 'exp' | 'iat'>): string {
  const config = getEnvironmentConfig();
  const now = Math.floor(Date.now() / 1000);
  const exp = now + (60 * 60 * 24); // 24 hours

  const tokenPayload: JWTPayload = {
    ...payload,
    exp,
    iat: now,
  };

  // In a real implementation, you would use a JWT library
  // This is a simplified version for demonstration
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payloadStr = btoa(JSON.stringify(tokenPayload));
  const signature = btoa(config.JWT_SECRET);

  return `${header}.${payloadStr}.${signature}`;
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const config = getEnvironmentConfig();
    const parts = token.split('.');
    
    if (parts.length !== 3) {
      return null;
    }

    const payloadStr = atob(parts[1]);
    const payload: JWTPayload = JSON.parse(payloadStr);

    // Check if token is expired
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return null;
    }

    // In a real implementation, you would verify the signature
    // This is a simplified version for demonstration
    return payload;
  } catch (error) {
    return null;
  }
}

export function decodeToken(token: string): JWTPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const payloadStr = atob(parts[1]);
    return JSON.parse(payloadStr);
  } catch (error) {
    return null;
  }
} 