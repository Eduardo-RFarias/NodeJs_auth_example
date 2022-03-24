import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import session from "express-session";
import connectSqLite from "connect-sqlite3";
import path from "path";

import "express-async-errors";

import errorHandler from "./middlewares/errorHandler";
import passport from "./services/authService";
import authRoute from "./routes/authRoute";

const server = express();

if (process.env.NODE_ENV !== "production") {
  server.use(morgan("dev"));
}
server.use(helmet());
server.use(express.json());

const SQLiteStore = connectSqLite(session);

server.use(
  session({
    secret: process.env.SECRET || "insecure",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: "auto",
    },
    store: new SQLiteStore({
      db: "db.sqlite",
      dir: path.join(process.cwd(), "database"),
    }),
  })
);

server.use(passport.initialize());
// init passport on every route call.
server.use(passport.session());
// allow passport to use "express-session".

server.use("/auth", authRoute);

server.use(errorHandler);

export default server;
