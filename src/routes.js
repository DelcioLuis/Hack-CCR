const express = require("express");


const PerfilController = require("./controllers/PerfilController");
const DasbordController = require("./controllers/DasbordController");
const MeuprojeController = require("./controllers/MeusProjctController");
const MentoriaController = require("./controllers/MentoriasController");

const routes = express.Router();


///perfil criar conta
routes.post("/perfil", PerfilController.create);
routes.get("/perfil", PerfilController.index);
routes.delete("/perfil/:id", PerfilController.delete);
routes.put("/perfil/:id", PerfilController.atualiza);

/// editas da dasbord
routes.post("/basbord", DasbordController.create);
routes.get("/basbord", DasbordController.index);
routes.delete("/basbord/:id", DasbordController.delete);
routes.put("/basbord/:id", DasbordController.atualiza);

// projectos do usuario
routes.post("/meuprojectos", MeuprojeController.create);
routes.get("/meuprojectos", MeuprojeController.index);
routes.delete("/meuprojectos/:id", MeuprojeController.delete);
routes.put("/meuprojectos/:id", MeuprojeController.atualiza);

// Metorias marcadas
routes.post("/mentoria", MentoriaController.create);
routes.get("/mentoria", MentoriaController.index);
routes.delete("/mentoria/:id", MentoriaController.delete);
routes.put("/mentoria/:id", MentoriaController.atualiza);


module.exports = routes;