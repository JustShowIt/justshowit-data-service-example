import model from './model';

export default {
    async getTestJson (req, res) {

        console.clear();
        console.log(new Date());
        
        const testJson = await model.getTest();
        
        res.set('Content-Type', 'application/json');
        
        console.log(testJson);
        
        res.send(testJson);
        res.end();
    }
}