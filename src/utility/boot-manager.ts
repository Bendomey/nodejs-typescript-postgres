import { Connection } from "typeorm";
import { User } from "../entity/User";

const bootManager = async (connection: Connection) => {
  // insert new users for test
  // await connection.manager.save(
  //   connection.manager.create(User, {
  //     firstName: "Phantom",
  //     lastName: "Assassin",
  //     age: 24,
  //   })
  // );
};

export default bootManager;
