const express = require('express')
const router = express.Router()
const interFaceController = require('../controllers/movies')

router.get('/', interFaceController.getAll)

router.get('/:id', interFaceController.getOne)

router.post('/', interFaceController.addMovie)

router.delete('/:id', interFaceController.removeMovie)

router.put('/:id', interFaceController.updateMovie)

module.exports = router