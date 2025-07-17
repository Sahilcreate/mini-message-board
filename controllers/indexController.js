const queries = require("../db/queries");
const CustomNoMessageError = require("../errors/CustomNoMessageError");

async function getMessages(req, res) {
  const messages = await queries.getAllMessages();

  if (!messages) {
    throw new CustomNoMessageError("No Messages Found!");
  }

  res.render("index", { title: "Mini Messageboard", messages: messages });
}

module.exports = { getMessages };
