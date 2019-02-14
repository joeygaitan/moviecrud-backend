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

const removeMovie = (req,res,next)=>{
    model.removeMovie(req.params.id)
    .then(data=>{
        return res.status(200).send(data)
    })
}

const updateMovie = (req,res,next)=>{
    console.log(req.body);
    
    model.updateMovie(req.params.id,req.body)
    .then(data=>{
        return res.status(201).send(data)
    })
}

module.exports = { getAll, getOne,addMovie, removeMovie, updateMovie }