require("dotenv").config();

const express = require("express");
const path = require("node:path");

const app = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter");
const deleteRouter = require("./routes/deleteRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", messageRouter);
app.use("/delete", deleteRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini Message Board - listening to port: ${PORT}`);
});
