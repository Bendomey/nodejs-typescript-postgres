import { createConnection, getConnectionOptions } from "typeorm";
// import { bootManager } from "../../utility";

const databaseConnectivity = async (environment: string = "development") => {
  try {
    const connectionOptions = await getConnectionOptions(environment);
    await createConnection({
      ...connectionOptions,
      name: "default",
    });
    // await bootManager(connection);
  } catch (error) {
    throw error;
  }
};

export default databaseConnectivity;
