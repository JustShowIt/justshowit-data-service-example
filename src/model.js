const request = require('request');

const mock = [
    {
        "id": "1","type": "Text",
        "options": {
            "text": "Neuronale Netze sind irgendwie total krass."
        },
        "units": [
            {
                "id": "2",
                "type": "Muh"
            },
            {
                "id": "3",
                "type": "Unit",
                "units": [
                    {
                        "id": "4",
                        "type": "Text",
                        "options": {
                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        }
                    }
                ]
            },
            {
                "id": "5",
                "type": "Text",
                "options": {
                    "text": "Die sist ein kleiner Text."
                }
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