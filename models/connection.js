const { Pool } = require("pg");

const pool = new Pool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  //   ssl: true,
  //   max: 20, // set pool max size to 20
  //   idleTimeoutMillis: 1000, // close idle clients after 1 second
  //   connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  //   maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

module.exports = pool;
