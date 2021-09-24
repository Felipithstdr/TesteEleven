exports.up = function(knex) {
    return knex.schema.createTable('loginCompany', function(table){
        table.increments('id').primary();
        table.string('email', 60).unique().notNullable();
        table.string('password', 6).notNullable();
        table.string('cnpj', 18).unique().notNullable();
        table.string('nameCompany', 30).notNullable();
        table.string('cellphone', 16).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('loginCompany');
};