import { User } from '../../models/User';
import { findAllUsers } from '../../services/falshcard.sevice';

export const Query = {
  users: async (parent: any, args: any, context: any): Promise<User[]> => {
    return await findAllUsers();
  },
};
