const db = require("../db");
const CustomNoMessageError = require("../errors/CustomNoMessageError");

async function getMessages(req, res) {
  const messages = await db.getMessages();

  if (!messages) {
    throw new CustomNoMessageError("No Messages Found!");
  }

  res.render("index", { title: "Mini Messageboard", messages: messages });
}

module.exports = { getMessages };
