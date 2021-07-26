import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Meal Order API",
  })
);

export default app;
