import cors from "cors";
import express, { Application } from "express";
import sequelize from "./config/db";
import errorHandler from "./middleware/errorHandler";
import propertyRouter from "./routes/property";

const app: Application = express();
app.use(cors());
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

app.use(errorHandler);
app.use("/properties", propertyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
