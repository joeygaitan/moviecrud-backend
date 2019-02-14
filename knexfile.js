const path = require('path')

module.exports = {
    development: {
        client: 'postgresql',
        connection: process.env.postgresql-opaque-72642,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },
} 