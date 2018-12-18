const controller = require('./controller');

module.exports = (app) => {
    app.get('/test', controller.getTestJson);
}