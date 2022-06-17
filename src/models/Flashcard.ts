import { User } from './User';

export type Flashcard = {
  id: string;
  title: string;
  description: string;
  user?: User;
  userId: number;
};

export type FlashcardInput = {
  title: string;
  description: string;
  userId: number;
};
