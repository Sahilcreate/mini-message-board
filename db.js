const { randomUUID } = require("crypto");

const messages = [
  {
    id: randomUUID(),
    text: "Hi there!",
    user: "Amando",
    description:
      "Just a random description which is nothing more than a slightly longer text.",
    added: new Date(),
  },
  {
    id: randomUUID(),
    text: "Hello World!",
    user: "Charles",
    description:
      "What can i even say now. i tried. but he didn't listen. it's like he think that he is the best when he is not.",
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function postMessage(messageText, messageUser, messageDescription) {
  messages.push({
    id: randomUUID(),
    text: messageText,
    user: messageUser,
    description: messageDescription,
    added: new Date(),
  });
}

async function getMessage(messageId) {
  return messages.filter((message) => message.id == messageId);
}

module.exports = { getMessages, postMessage, getMessage };
