const mock = [
    {
        "params": {
            "text": "Neuronale Netze sind irgendwie total krass.",
            "xxx": "Unknown Param"
        },
        "units": [
            {
                "type": "muh"
            },
            {
                "id": "3",
                "params": {
                    "titel": "Lustiges Video",
                    "description": "Ein cooles lustiges Video mit einem Hasen.",
                    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
                    "resolution": "320x240",
                    "runtime": "10.26s",
                    "size": "131.509.108",
                    "author": "Mario Linz",
                    "intelligentSearchDepth": 5
                }
            },
            {
                "_jsi_id": "4",
                "_jsi_type": "unit",
                "_jsi_units": [
                    {
                        "id": "5",
                        "type": "text",
                        "params": {
                            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                        }
                    }
                ]
            },
            {
                "id": "6",
                "type": "text",
                "params": {
                    "text": "Die sist ein kleiner Text."
                }
            }
        ]
    }
];

const unspecifiedDataObjectMock = {
    "type": "muh",
    "muh": "Die eine Muh ist eine kleine Kuh",
    "kuh": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    "irgendwas": [
        {
            "cow": "Kühe Kühe Kühe"
        },
        [],
        {
            "jo": "http://www.google.de",
            "klaro": "Irgend ein komischer kleiner Text"
        }
    ],
    "foo": {},
    "bar": "http://................/test.html"
};

const unspecifiedSimpleDataObjectMock = {
    "type": "test",
    "muh": "Die Muh ist eine kleine Kuh",
    "kuh": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    "bar": "http://................/test.html"
};

const unspecifiedDataArrayMock = [
    "Muh sagt die Kuh",
    "http://www.google.de",
    [
        "Die Kuh"
    ],
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    {
        "test": 123
    },
    "http://www.gmx.de"
];

export default {
    getTest () {
        return Promise.resolve(unspecifiedDataObjectMock);
    }
}
