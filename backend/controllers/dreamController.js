const Dream = require('../models/dreamModel')
const mongoose = require('mongoose')

// get all dreams

const getAllDreams = async (req, res) => {
    try {
        const dreams = await Dream.find({}).sort({ createdAt: -1 });
        res.status(200).json(dreams)

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// get single dream
const getDream = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `Unvalid dream ID: ${id}` });
    }
    try {
        const dream = await Dream.findById(id);
        if (!dream) {
            return res.status(404).json({ error: "Dream not found" }); // return the res so the code will not continue.
        }
        res.status(200).json(dream);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

//create new dream
const createDream = async (req, res) => {
    const { title, duoDate, tools, steps } = req.body;
    // add doc to DB
    try {
        const dream = await Dream.create({ title, duoDate, tools, steps })
        res.status(200).json(dream);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}


// delete single dream
const deleteDream = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `Unvalid dream ID: ${id}` })
    }
    try {
        const dream = await Dream.findOneAndDelete({ _id: id });
        if (!dream) {
            return res.status(404).json({ error: `Unvalid dream ID: ${id}` })
        }
        res.status(200).json(dream);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}


//update single dream
const updateDream = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Not valid dream ID" });
    }
    // check if all field names correct
    const validFields = Object.keys(Dream.schema.paths);
    const invalidFields = Object.keys(req.body).filter(field => !validFields.includes(field));
    if (invalidFields.length > 0) {
        return res.status(400).json({ error: `Invalid fields: ${invalidFields.join(', ')}` });
    }

    try {
        const dream = await Dream.findByIdAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true, runValidators: true }); // new: true -> return the updated doc, runValidators -> check that the value type match the schema.
        if (!dream) {
            return res.status(404).json({ error: "Not valid dream ID" });
        }
        res.status(200).json(dream);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createDream,
    getAllDreams,
    getDream,
    deleteDream,
    updateDream
}