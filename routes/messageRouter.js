const { Router } = require("express");
const messageRouter = Router();
const getMessage = require("../controllers/messageController");

messageRouter.get("/:messageId", getMessage);

module.exports = messageRouter;
