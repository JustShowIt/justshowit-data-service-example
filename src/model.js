const request = require('request');

const mock = [
    {
        "id": "1",
        "type": "text",
        "options": {
            "text": "Neuronale Netze sind irgendwie total krass."
        },
        "units": [
            {
                "id": "2",
                "type": "muh"
            },
            {
                "id": "3",
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
            },
            {
                "id": "4",
                "type": "unit",
                "units": [
                    {
                        "id": "5",
                        "type": "text",
                        "options": {
                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        }
                    }
                ]
            },
            {
                "id": "6",
                "type": "text",
                "options": {
                    "text": "Die sist ein kleiner Text."
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