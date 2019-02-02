const model = require('../models/movies')

const getAll = (req, res, next) => {
    model.getAll()
    .then(data=>{ return res.status(200).send(data)})
}

const getOne = (req,res,next) => {
    model.getOne(req.params.id)
    .then(data=>{
        return res.status(200).send(data)
    })
}

const addMovie = (req,res,next)=> {
    model.addMovie(req.body)
    .then(data=>{
        return res.status(201).send(data)
    })
}

const remove = (req,res,next)=>{
    model.remove(req.params.id)
    .then(data=>{
        return res.status(200).send(data)
    })
}

module.exports = { getAll, getOne,addMovie }