const db = require("../db");
const CustomNoMessageError = require("../errors/CustomNoMessageError");

async function getMessage(req, res) {
  const { messageId } = req.params;

  const messageArray = await db.getMessage(messageId);

  if (!messageArray) {
    throw new CustomNoMessageError("No Message with such Id was Found");
  }

  const message = messageArray[0];

  res.render("message", { title: message.user, message: message });
}

module.exports = getMessage;
