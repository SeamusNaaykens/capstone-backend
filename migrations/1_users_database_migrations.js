exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.uuid('id').primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('location').notNullable();
            table.string('profile_statement').notNullable();
            table.string('favourite_produce').notNullable();
            table.string('image')
            table.timestamp('account_creation').defaultTo(knex.fn.now());
            table.string('password').notNullable();
        })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };