const massive = require("massive");

const connect = massive({
  host: "localhost",
  port: 5433,
  database: "dms",
  user: "postgres",
  password: "admin",
});

console.log('res')

module.exports = connect;
