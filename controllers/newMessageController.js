const db = require("../db");

function postMessage(req, res) {
  const message = req.body;
  db.postMessage(
    message.messageText,
    message.userName,
    message.messageDescription
  );
  res.redirect("/");
}

module.exports = postMessage;
