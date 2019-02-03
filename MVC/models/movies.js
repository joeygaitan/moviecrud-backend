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

const removeMovie = (id) => {
    return db('movies')
    .where({
        id
    })
    .del()
    .returning('*')
}

const updateMovie = (id, body) => {
    return db('movies')
    .where({
        id
    })
    .update({
        "title":body.title,
        "director":body.director,
        "years":body.years,
        "rating":body.rating,
        "picture_url":body.picture_url
    })
    .returning("*")
}


module.exports = { getAll, getOne, addMovie, removeMovie, updateMovie }