
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', table=>{
        table.increments()
        table.string('title').notNullable().default('')
        table.string('director').notNullable().default('')
        table.integer('years').notNullable().default(1888)
        table.integer('rating').notNullable().default(1)
        table.string('picture_url').notNullable().default('')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies')
};
