import { gql } from 'apollo-server';

export const mutationTypeDefs = gql`
  type Mutation {
    createUser(input: createUserInput!): User
  }
`;
