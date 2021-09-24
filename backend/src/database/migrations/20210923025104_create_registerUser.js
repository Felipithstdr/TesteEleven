exports.up = function(knex) {
    return knex.schema.createTable('RegisterUser', function(table){
        table.increments('id').primary();
        table.string('email', 60).unique().notNullable();
        table.string('password', 6).notNullable();
        table.string('name', 30).notNullable();
        table.string('lastName', 40).notNullable();
        table.integer('loginCompany_id').unsigned().notNullable();

        table.foreign('loginCompany_id').references('id').inTable('loginCompany');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('RegisterUser');
};