import { Flashcard, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export const createUser = async (user: User): Promise<User> => {
//   return await prisma.user.create({ data: user });
// };

export const findAllcards = async (): Promise<Flashcard[]> => {
  return await prisma.flashcard.findMany({});
};
