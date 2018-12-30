const model = require('./model');
const ServiceConfig = require('./service-config.js');
const request = require('request-promise');
const fs = require('fs');
const path = require('path');

module.exports = {
    
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