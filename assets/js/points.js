let surveyResponses = [
    ["", 0, 0, 0, 0, 1,  //page 1
        3, 1, //page 2
        1, //page 3
        null, //page 4
        0, //page 5
        1, 1, //page 6
        null, null, //page 7
        null, //page 8
        0, 1, 0,//page 9
        0, 3, 4, 5, //page 10
        1, 1, 1, 1, //page 11
        "FTI", // page 12
        0, 2000, 0, 12, 2, //page 13
        0, 0, 0, 0, 0, //page 14
        1, //page 15
        0 //points
    ]
]

function calculateLikelyhoodPoints() {
    for (const response of surveyResponses) {
        let shortTexts = getShortTexts(response);

        console.log(shortTexts);

        for (const shortText of shortTexts) {

            if(shortText === "alreadyVoted" && document.getElementById("alreadyVoted").checked) {
                response[response.length - 1] = -1; //todo get max and set all elements with -1 to max
                break;
            }

            if(shortText === "notRegistered" && document.getElementById("notRegistered").checked) {
                response[response.length - 1] = 0;
                break;
            }

            if(shortText === "nothonest" || shortText === "somewhathonest") {
                continue;
                //todo
            }
            response[response.length-1] += parseFloat(document.getElementById(shortText).value);
        }

    }

    console.log(surveyResponses);
}

//gets the short id texts (used as the input's id=) given a single response object (arr of responses)
function getShortTexts(response) {
    let out = []

    const texts = [
        null, ["thinkingALot", "thinkingSome", "thinkingLittle"], null, [null, "notRegistered"], null, ["alreadyVoted", null, null], //page 1
        ["voteInPersonOrRecieved", "voteInPersonOrRecieved", "voteInPersonOrRecieved", "requestedNotReceived", "notRequested", null, null], ["veryLikely", "likely", "neitherLikelyNorUnlikely", "somewhatUnlikely", "unlikely"], //page 2
        null, //page 3
        null, //page 4
        null, //page 5
        null, null, //page 6
        null, null, //page 7
        null, //page 8
        null, null, null,//page 9
        null, null, null, null, //page 10
        null, null, null, null, //page 11
        (function (res) { return res.includes("Y") ? "excludeIncorrect" : null}), // page 12
        null, null, null, null, null, //page 13
        null, null, null, null, null, //page 14
        ["nothonest", "somewhathonest", null, null] //page 15
    ];


    for (let i = 0; i < texts.length; i++) {
        if(texts[i] === null){
            continue
        }
        if(Array.isArray(texts[i])){
            if (texts[i][response[i]] !== null)
                out.push(texts[i][response[i]])
            continue
        }
        if(typeof texts[i] === "function"){
            let result = texts[i](response[i])
            if (result !== null)
                out.push(result);
        }
    }

    return out;

}