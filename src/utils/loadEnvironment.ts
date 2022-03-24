import dotenv, { DotenvSafeOptions } from "dotenv-safe";
import path from "path";

const config: DotenvSafeOptions = {
  example: path.resolve(process.cwd(), "env", ".example.env"),
};

//! Only load the development mode if the NODE_ENV is not production
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
  config.path = path.resolve(process.cwd(), "env", ".dev.env");
}

dotenv.config(config);
