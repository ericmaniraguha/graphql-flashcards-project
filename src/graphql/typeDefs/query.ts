import { gql } from 'apollo-server';

export const queryTypeDefs = gql`
  type Query {
    users: [User!]
  }
`;

export const queryFlashcardTypeDefs = gql`
  type Query {
    flashcards: [Flashcard!]
  }
`;
