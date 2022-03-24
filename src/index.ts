import "./utils/loadEnvironment";
import "reflect-metadata";

import http from "http";
import server from "./server";
import database from "./dataSource";

const httpServer = http.createServer(server);

const { PORT } = process.env;

database.initialize().then(() => {
  httpServer.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening to port ${PORT}`);
  });
});
