const queries = require("../db/queries");

async function postMessage(req, res) {
  const message = req.body;
  await queries.postMessage(message);
  res.redirect("/");
}

module.exports = { postMessage };
