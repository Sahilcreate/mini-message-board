const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows;
}

async function postMessage(message) {
  await pool.query(
    "INSERT INTO messages (username, message_heading, message_description) VALUES ($1, $2, $3)",
    [message.username, message.message_heading, message.message_description]
  );
}

async function deleteMessage(messageId) {
  await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
  deleteMessage,
};
