// const express = require('express')
// const { ObjectId } = require('mongodb')
// const router = express.Router()



// // get all dreams, sorted
// router.get('/', async (req, res) => {
//     console.log("in paging!");
//     res.json({secsses: "get all dreams"})
//     // let dreams = []
//     // const page = req.query.page || 0
//     // const dreamsPerPage = 3
//     // dreamsCollection
//     //     .find()
//     //     .skip(page * dreamsPerPage)
//     //     .limit(dreamsPerPage)
//     //     .sort({ moneyNeeded: 1 })
//     //     .forEach(dream => { dreams.push(dream) })
//     //     .then(() => {
//     //         res.status(200).json(dreams)
//     //     })
//     //     .catch((err) => {
//     //         res.status(500).json({ error: "could not find the document" })
//     //     })
// })

// // // get single dream (document) by ID
// // router.get('/:id', (req, res) => {

// //     if (ObjectId.isValid(req.params.id)) {

// //         // dreamsCollection = db.collection('dreams');
// //         dreamsCollection
// //             .findOne({ _id: new ObjectId(req.params.id) })
// //             .then((dream) => {
// //                 if (dream) {
// //                     res.status(200).json(dream)
// //                 } else {
// //                     res.status(500).json({ error: "id not found" })
// //                 }

// //             })
// //             .catch((err) => {
// //                 res.status(500).json({ error: "could not find the document" })
// //             })
// //     } else {
// //         res.status(500).json({ error: "id is not valid" })
// //     }
// // });

// // // insert new dream
// // router.post('/', (req, res) => {
// //     // dreamsCollection = db.collection('dreams');

// //     dreamsCollection
// //         .insertOne(req.body)
// //         .then(result => {
// //             res.status(201).json(result)
// //         })
// //         .catch((err) => {
// //             res.status(500).json("could not insert this dream")
// //         })

// // });

// // // delete one dream by ID
// // router.delete('/:id', (req, res) => {

// //     if (ObjectId.isValid(req.params.id)) {
// //         // dreamsCollection = db.collection('dreams');
// //         dreamsCollection
// //             .deleteOne({ _id: new ObjectId(req.params.id) })
// //             .then(result => {
// //                 res.status(201).json(result)
// //             })
// //             .catch((err) => {
// //                 res.status(500).json({ error: "could not delete this dream" })
// //             })
// //     } else {
// //         res.status(500).json({ error: "invalid ID" })
// //     }

// // })

// // // update one dream by ID
// // router.patch('/:id', (req, res) => {
// //     if(ObjectId.isValid(req.params.id)){
// //         const updates = req.body;
// //         // dreamsCollection = db.collection('dreams');
// //         dreamsCollection
// //             .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
// //             .then(result => {res.status(200).json(result)})
// //             .catch((err) => {res.status(500).json({error: "could not update this dream"})})

// //     }else{
// //         res.status(500).json({error: "invalid ID"})
// //     }
// // })

// // // get dreams with rating 5
// // router.get('/', (req, res) => {
// //     console.log("in rating!");
// //     const rating = req.query.rate;
// //     dreamsCollection
// //         .createIndex({rate: 5})
// //         .find({rate: rating})
// //         .then(result => {res.status(200).json(result)})
// //         .catch(err => {res.status(200).json("colud not create index")})

// // })

// module.exports = router