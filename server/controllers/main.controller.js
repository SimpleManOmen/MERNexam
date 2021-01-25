const { Main } = require('../models/main.model')

module.exports.createMain = (request, response) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = request.body
    Main.create({
        name, type, description, skillOne, skillTwo, skillThree
    })
        .then(main => response.json(main))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllMains = (request, response) => {
    Main.find({}).sort('type')
        .then(mains => response.json(mains))
        .catch(err => response.json(err))
}

module.exports.getMain = (request, response) => {
    Main.findOne({"_id": request.params.id})
    .then(main => response.json(main))
    .catch(err => response.json(err))
}

module.exports.updateMain = (request, response) => {
    Main.findOneAndUpdate({"_id": request.params.id}, request.body, { runValidators: true })
        .then(updatedMain => response.json(updatedMain))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteMain = (request, response) => {
    Main.deleteOne({"_id": request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}