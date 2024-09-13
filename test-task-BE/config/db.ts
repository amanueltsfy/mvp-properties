import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "test_task_development",
  username: "root",
  password: "root",
  host: "localhost",
  dialect: "mysql",
  logging: false
});

export default sequelize;
