import { users } from '../../db';

export const Query = {
  users: (parent: any, args: any, context: any) => users,
};
