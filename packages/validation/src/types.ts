/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Validation type definitions
 */

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationRule {
  type: string;
  value?: any;
  message?: string;
}

export interface FieldValidation {
  field: string;
  rules: ValidationRule[];
}

export interface Schema {
  fields: FieldValidation[];
} 