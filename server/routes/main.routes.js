const MainController = require('../controllers/main.controller')
const { Main } = require('../models/main.model')

module.exports = (app) =>{
    app.get('/api/main/get', MainController.getAllMains)
    app.post('/api/main', MainController.createMain)
    app.get('/api/main/:id', MainController.getMain)
    app.put('/api/main/edit/:id', MainController.updateMain)
    app.delete('/api/main/delete/:id', MainController.deleteMain)
}