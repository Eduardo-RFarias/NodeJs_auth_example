import { DataSource } from "typeorm";
import path from "path";

import User from "./models/User";

import UserSubscriber from "./subscribers/UserSubscriber";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(process.cwd(), "database", "db.sqlite"),
  entities: [User],
  subscribers: [UserSubscriber],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
