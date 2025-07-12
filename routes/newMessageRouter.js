const { Router } = require("express");
const postMessage = require("../controllers/newMessageController");
// const { getMessages } = require("../controllers/indexController");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "Form - MMB" });
});
newMessageRouter.post("/", postMessage);

module.exports = newMessageRouter;
