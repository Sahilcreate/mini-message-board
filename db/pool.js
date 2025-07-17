const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: true,
    ca: Buffer.from(process.env.CA_CERT, "base64").toString(),
  },
});
