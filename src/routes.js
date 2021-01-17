const express = require("express");


const PerfilController = require("./controllers/PerfilController");
const DasbordController = require("./controllers/DasbordController");

const routes = express.Router();


///perfil criar conta
routes.post("/perfil", PerfilController.create);
routes.get("/perfil", PerfilController.index);
routes.delete("/perfil/:id", PerfilController.delete);
routes.put("/perfil/:id", PerfilController.atualiza);

routes.post("/basbord", DasbordController.create);
routes.get("/basbord", DasbordController.index);
routes.delete("/basbord/:id", DasbordController.delete);
routes.put("/basbord/:id", DasbordController.atualiza);


module.exports = routes;