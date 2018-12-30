const request = require('request');

const mock = [
    {
        "id": "1",
        "type": "Unit",
        "units": [
            {
                "id": "2",
                "type": "TextField"
            },
            {
                "id": "3",
                "type": "Unit",
                "units": [
                    {
                        "id": "4",
                        "type": "TextField"
                    }
                ]
            },
            {
                "id": "5",
                "type": "Text"
            },
            {
                "id": "6",
                "options": {
                "titel": "Lustiges Video",
                "description": "Ein cooles lustiges Video mit einem Hasen.",
                "path": "https://www.w3schools.com/html/mov_bbb.mp4",
                "resolution": "320x240",
                "runtime": "10.26s",
                "size": "131.509.108",
                "author": "Mario Linz",
                "intelligentSearchDepth": 5
                }
            }
        ]
    }
];


module.exports = {
    getTest (req) {
        return new Promise((resolve/*, rejected*/) => {
            resolve(mock[0]);
        });
    }
}