import { userTypeDefs } from './user';
import { queryFlashcardTypeDefs, queryTypeDefs } from './query';
import { mutationTypeDefs } from './mutation';
import { flashcardTypeDefs } from './flashcard';

export const typeDefs = [
  userTypeDefs,
  queryTypeDefs,
  mutationTypeDefs,
  flashcardTypeDefs,
  queryFlashcardTypeDefs,
];
