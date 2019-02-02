const db = require('../../db/knex')
const id = require('shortid')

const getAll = () => {
    return db('movies')
}

const getOne = (id) => {
    return db('movies')
    .where({id})
}

const addMovie = (body) => {
    return db('movies')
    .insert(body)
    .returning('*')
}



module.exports = { getAll,getOne,addMovie }