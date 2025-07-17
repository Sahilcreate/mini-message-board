const { Router } = require("express");
const deleteController = require("../controllers/deleteController");

const deleteRouter = Router();

deleteRouter.post("/:messageId", deleteController.deleteMessage);

module.exports = deleteRouter;
