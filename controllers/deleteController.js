const queries = require("../db/queries");
const CustomNoMessageError = require("../errors/CustomNoMessageError");

async function deleteMessage(req, res) {
  const { messageId } = req.params;
  await queries.deleteMessage(messageId);
  res.redirect("/");
}

module.exports = { deleteMessage };
