import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import allRoutes from "./routes/index.js";
import paths from "./routes/path.js";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.use(paths.Base, allRoutes);

app.use(express.static(path.resolve("view")));

app.use("/", (req, res) => {
  res.sendFile(path.resolve("view", "index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is running", +PORT);
});
