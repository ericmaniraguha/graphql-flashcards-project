import _ from 'lodash';
import { User } from '../../models/User';
import { createUser } from '../../services/user.sevice';

export const Mutation = {
  createUser: async (parent: any, args: any, context: any): Promise<User> => {
    return await createUser(args.input);
  },
};
