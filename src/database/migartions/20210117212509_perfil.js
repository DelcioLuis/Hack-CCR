
exports.up = function(knex) {
  return knex.schema.createTable("perfil", function(table){
      

    table.increments("idsys");
    
    table.string("id").notNullable();
    table.string("nome").notNullable();
    table.string("nascimento").notNullable();
    table.string("genero").notNullable();
    table.string("uf").notNullable();
    table.string("cidade").notNullable();
    table.string("prodcultural").notNullable();
    table.string("telefone").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable("perfil");

};
