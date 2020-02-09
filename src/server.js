import express from "express";

import { json } from "body-parser";

export const app = express();

app.use(json());

const log = (req, res, next) => {
  console.log("Logging");
  next();
};

app.get("/", log, (req, res) => {
  res.send({ message: "Hello!" });
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.get("/user/help", (req, res) => {
  res.send({ message: "Help" });
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};
