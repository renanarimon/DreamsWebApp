/**
 * CRUD API methods
 */
const express = require('express')
const router = express.Router()
const Dream = require('../models/dreamModel') // dream schema
const { createDream,
     getAllDreams,
     getDream,
     deleteDream,
     updateDream }
     = require('../controllers/dreamController')

// get all dreams, sorted
router.get('/', getAllDreams)

// get single dream (document) by ID
router.get('/:id', getDream);

// insert new dream
router.post('/', createDream);

// delete one dream by ID
router.delete('/:id', deleteDream)

// update one dream by ID
router.patch('/:id', updateDream)

// // get dreams with rating 5
// router.get('/', (req, res) => {


// })

module.exports = router