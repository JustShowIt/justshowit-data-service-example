import controller from './controller';

export default (app) => {
    app.get('/test', controller.getTestJson);
}