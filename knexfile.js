const path = require('path')

module.exports = {
    development: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'db', 'seeds')
        }
    },
} 