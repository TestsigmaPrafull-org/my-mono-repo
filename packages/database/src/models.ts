/**
 * DUMMY COMMENT: This is a copied package for testing purposes
 * Database model definitions
 */

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DatabaseSchema {
  users: User[];
  posts: Post[];
  comments: Comment[];
} 