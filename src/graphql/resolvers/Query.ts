import { User } from '../../models/User';
import { findAllUsers } from '../../services/user.sevice';
import { Flashcard } from '@prisma/client';
import { findAllcards } from '../../services/flashcard.sevice';

export const Query = {
  users: async (parent: any, args: any, context: any): Promise<User[]> => {
    return await findAllUsers();
  },
  flashcards: async (
    parent: any,
    args: any,
    context: any
  ): Promise<Flashcard[]> => {
    return await findAllcards();
  },
};
