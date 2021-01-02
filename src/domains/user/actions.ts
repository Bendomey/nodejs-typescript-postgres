import {
  ICreateUser,
  IGetSingleUser,
  IRemoveUser,
  IUpdateUser,
} from "../../@Types/user";
import { User } from "../../entity/User";

const all = () => {
  return User.find();
};

const one = async (body: IGetSingleUser) => {
  const __oldUser = await User.findOne(body.id);
  if (!__oldUser) return new Error("UserNotFound");

  return __oldUser;
};

const save = async (body: ICreateUser) => {
  const __newUser = User.create(body);
  await __newUser.save();
  return __newUser;
};

const update = async (body: IUpdateUser) => {
  const __oldUser = await User.findOne(body.id);
  if (!__oldUser) return new Error("UserNotFound");
  await User.update({ id: __oldUser.id }, { ...body });
  return true;
};

const remove = async (body: IRemoveUser) => {
  const __oldUser = await User.findOne(body.id);
  if (!__oldUser) return new Error("UserNotFound");
  await __oldUser.softRemove();
  return true;
};

export { all, one, save, update, remove };
