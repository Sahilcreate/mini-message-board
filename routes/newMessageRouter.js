const { Router } = require("express");
const newMessageController = require("../controllers/newMessageController");
// const { getMessages } = require("../controllers/indexController");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "Form - MMB" });
});
newMessageRouter.post("/", newMessageController.postMessage);

module.exports = newMessageRouter;
