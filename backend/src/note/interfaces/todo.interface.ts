import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly title: string;
  readonly body: string;
  readonly author: string;
  readonly createdAt: string;
}
