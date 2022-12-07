exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.uuid('id').primary();
            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('location').notNullable();
            table.string('credentials').notNullable();
            table.timestamp('account_creation').defaultTo(knex.fn.now());
        })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };