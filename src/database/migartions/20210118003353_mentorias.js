
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};

exports.up = function(knex) {
  return knex.schema.createTable("mentorias", function(table){
      

    table.increments("idsys");
    
    table.string("id").notNullable();
    table.string("nome").notNullable();
    table.string("profissao").notNullable();
    table.string("sector").notNullable();
    
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable("mentorias");

};
