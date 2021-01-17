
exports.up = function(knex) {
  return knex.schema.createTable("projectos", function(table){
      

    table.increments("idsys");
    
    table.string("id").notNullable();
    table.string("nome").notNullable();
    table.string("edital").notNullable();
    table.string("abertura").notNullable();
    table.string("encerramento").notNullable();
    table.string("progresso").notNullable();
    table.string("pendecias").notNullable();
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable("projectos");

};
