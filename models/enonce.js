const mongoose = require('mongoose');
constjoi = require('joi');
const enonce_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    prix:{
        type: String,
        required: true
    }
}, { timestamps: true })
const Annonce = mongoose.model("Annonce ", enonce_schema);

function validateEnonce(obj) {
    const schema = joi.object({
        title: joi.String().trim().min(3).max(255),
        content: joi.String().trim().min(3).max(255),
        description: joi.String().trim().min(3).max(255),
    })
}
module.exports = {
    Annonce,
    validateEnonce
   
}