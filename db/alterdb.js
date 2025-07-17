#! /usr/bin/env node
require("dotenv").config();

const fs = require("fs");
const path = require("node:path");
const { Client } = require("pg");

const SQL = `
ALTER TABLE messages
ADD COLUMN added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
