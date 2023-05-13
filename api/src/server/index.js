const server = require("./app");
const { conn } = require("../database/db");

conn.sync({ force: false }).then(() => {
  console.log("estamos conectado ");
  server.listen(3001, () => {
    console.log("Bienvenido al port 3001");
  });
});
