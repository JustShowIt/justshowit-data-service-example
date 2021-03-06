import model from './model';

export default {
    async getTestJson (req, res) {

        console.clear();
        console.log(new Date());
        
        const testJson = await model.getTest();
        
        res.set('Content-Type', 'application/json');
        
        console.log("");
        console.log("");
        console.log("======================");
        console.log("========== JSON FROM DATA SERVICE ====================");
        console.log("======================");
        console.dir(testJson, { depth: null, colors: true })
        console.log("");
        console.log("");
        
        res.send(testJson);
        res.end();
    }
}