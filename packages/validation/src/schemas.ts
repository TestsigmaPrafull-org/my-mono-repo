import { Schema, FieldValidation, ValidationRule } from './types';

export const USER_SCHEMA: Schema = {
  fields: [
    {
      field: 'email',
      rules: [
        { type: 'required' },
        { type: 'email' },
        { type: 'maxLength', value: 255 },
      ],
    },
    {
      field: 'name',
      rules: [
        { type: 'required' },
        { type: 'minLength', value: 2 },
        { type: 'maxLength', value: 100 },
      ],
    },
    {
      field: 'password',
      rules: [
        { type: 'required' },
        { type: 'minLength', value: 8 },
        { type: 'pattern', value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/ },
      ],
    },
  ],
};

export const POST_SCHEMA: Schema = {
  fields: [
    {
      field: 'title',
      rules: [
        { type: 'required' },
        { type: 'minLength', value: 5 },
        { type: 'maxLength', value: 200 },
      ],
    },
    {
      field: 'content',
      rules: [
        { type: 'required' },
        { type: 'minLength', value: 10 },
        { type: 'maxLength', value: 10000 },
      ],
    },
    {
      field: 'authorId',
      rules: [
        { type: 'required' },
        { type: 'pattern', value: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/ },
      ],
    },
  ],
};

export const COMMENT_SCHEMA: Schema = {
  fields: [
    {
      field: 'content',
      rules: [
        { type: 'required' },
        { type: 'minLength', value: 1 },
        { type: 'maxLength', value: 1000 },
      ],
    },
    {
      field: 'postId',
      rules: [
        { type: 'required' },
        { type: 'pattern', value: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/ },
      ],
    },
  ],
}; 