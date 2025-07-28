/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Validation utilities and rules
 */

import { truncate } from '@testsigmaprafull-org/utils';
import { ValidationError, ValidationResult, ValidationRule } from './types';

export class Validator {
  private errors: ValidationError[] = [];

  validateRequired(value: any, field: string, message?: string): boolean {
    if (value === null || value === undefined || value === '') {
      this.errors.push({
        field,
        message: message || `${field} is required`,
        value,
      });
      return false;
    }
    return true;
  }

  validateEmail(value: string, field: string, message?: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      this.errors.push({
        field,
        message: message || `${field} must be a valid email address`,
        value,
      });
      return false;
    }
    return true;
  }

  validateMinLength(value: string, minLength: number, field: string, message?: string): boolean {
    if (value.length < minLength) {
      this.errors.push({
        field,
        message: message || `${field} must be at least ${minLength} characters long`,
        value: truncate(value, 50),
      });
      return false;
    }
    return true;
  }

  validateMaxLength(value: string, maxLength: number, field: string, message?: string): boolean {
    if (value.length > maxLength) {
      this.errors.push({
        field,
        message: message || `${field} must be no more than ${maxLength} characters long`,
        value: truncate(value, 50),
      });
      return false;
    }
    return true;
  }

  validatePattern(value: string, pattern: RegExp, field: string, message?: string): boolean {
    if (!pattern.test(value)) {
      this.errors.push({
        field,
        message: message || `${field} format is invalid`,
        value,
      });
      return false;
    }
    return true;
  }

  validateNumber(value: any, field: string, message?: string): boolean {
    if (isNaN(Number(value))) {
      this.errors.push({
        field,
        message: message || `${field} must be a valid number`,
        value,
      });
      return false;
    }
    return true;
  }

  validateMin(value: number, min: number, field: string, message?: string): boolean {
    if (value < min) {
      this.errors.push({
        field,
        message: message || `${field} must be at least ${min}`,
        value,
      });
      return false;
    }
    return true;
  }

  validateMax(value: number, max: number, field: string, message?: string): boolean {
    if (value > max) {
      this.errors.push({
        field,
        message: message || `${field} must be no more than ${max}`,
        value,
      });
      return false;
    }
    return true;
  }

  getErrors(): ValidationError[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }

  getResult(): ValidationResult {
    return {
      isValid: this.errors.length === 0,
      errors: this.getErrors(),
    };
  }
} 