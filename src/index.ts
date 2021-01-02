import "reflect-metadata";
import "dotenv/config";
import { RestServer, GraphqlServer } from "./interfaces";
import { DatabseConnectivity } from "./infrastructure";

let PORT: string = process.env.PORT || "5000";
let appName: string = process.env.APP_NAME || "Node starter";

(async () => {
  // make a connection to the db
  await DatabseConnectivity(process.env.NODE_ENV);

  //connect to grapqhl server
  const graphqlServer = GraphqlServer();
  graphqlServer.applyMiddleware({
    app: RestServer,
    path: "/graphql",
    cors: false,
  });

  // start express server
  RestServer.listen(PORT, async () => {
    console.log(`${appName} Server started on http://localhost:${PORT}`);
    console.log(
      `${appName} Graphql served on http://localhost:${PORT}/graphql`
    );
  });
})();
