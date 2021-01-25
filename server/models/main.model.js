const mongoose = require('mongoose')

const MainSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "The name must be at least three characters long."],
        required: [true, "A name is required."],
        // unique: true
    },
    type: {
        type: String,
        minlength: [3, "The type must be at least three characters long."],
        required: [true, "A type is required."],
    },
    description:{
        type: String,
        minlength: [3, "The description must be at least three characters long."],
        required: [true, "A description is required."],
    },
    skillOne:{
        type: String,
        // minlength: [3, "The skill must be at least three characters long."],
    },
    skillTwo:{
        type: String,
        // minlength: [3, "The skill must be at least three characters long."],
    },
    skillThree:{
        type: String,
        // minlength: [3, "The skill must be at least three characters long."],
    },

}, { timestamps: true})

module.exports.Main = mongoose.model("Main", MainSchema)