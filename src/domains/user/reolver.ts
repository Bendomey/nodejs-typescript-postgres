import {
  ICreateUser,
  IGetSingleUser,
  IRemoveUser,
  IUpdateUser,
} from "../../@Types/user";
import { all, one, remove, save, update } from "./actions";

const resolver = {
  Query: {
    users: () => all(),
    user: (_: any, args: { filter: IGetSingleUser }) => one(args.filter),
  },
  Mutation: {
    createUser: (_: any, args: { input: ICreateUser }) => save(args.input),
    updateUser: (_: any, args: { input: IUpdateUser }) => update(args.input),
    deleteUser: (_: any, args: { input: IRemoveUser }) => remove(args.input),
  },
};

export default resolver;
