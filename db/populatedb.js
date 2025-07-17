#! /usr/bin/env node
require("dotenv").config();

const fs = require("fs");
const path = require("node:path");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message_heading VARCHAR ( 255 ),
    message_description TEXT,
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message_heading, message_description, added_date)
VALUES
    ('Bryan', 'Hello World', 'This is Bryan''s first message.'),
    ('Odin', 'Wisdom of the Gods', 'All knowledge comes at a price.'),
    ('Damon', 'Greetings', 'Damon just joined the board!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(path.resolve(__dirname, "../ca.pem")).toString(),
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
