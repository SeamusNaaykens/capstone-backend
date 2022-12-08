exports.up = function (knex) {
    return knex.schema.createTable('produce', (table) => {
        table.uuid('id').primary();
        table
            .uuid('user_id')
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('produce_name').notNullable();
        table.string('produce_type').notNullable();
        table.string('location').notNullable();
        table.string('quantity').notNullable();
        table.timestamp('harvest_date').notNullable();
        table.string('image')
        table.timestamp('post_date').defaultTo(knex.fn.now());
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('produce');
  };
  