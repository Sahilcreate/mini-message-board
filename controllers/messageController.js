const CustomNoMessageError = require("../errors/CustomNoMessageError");
const queries = require("../db/queries");

async function getMessage(req, res) {
  const { messageId } = req.params;
  const messageArray = await queries.getMessage(messageId);

  if (!messageArray) {
    throw new CustomNoMessageError("No Message with such Id was Found");
  }

  const message = messageArray[0];

  res.render("message", { title: message.username, message: message });
}

module.exports = getMessage;
