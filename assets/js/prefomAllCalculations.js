var outputsUpdated = true;
var updateIndexRequest = 0;
var old_body = null;
var old_response = null;

function updateOutputs() {
    outputsUpdated = false;
    // calculateLikelyhoodPoints();
    updateSliderFeedback();

    outputsUpdated = true;
}


function getUpdatedValues() {


    // ensure that updateOutputs runs before this (to ensure checkboxes work). This is a horrible, hacky way to do this
    // and needs to be rewritten but it works for now
    /*
       ^(;,;)^
     */
    if (outputsUpdated === false) {
        window.setTimeout(getUpdatedValues, 100); /* this checks the flag every 100 milliseconds*/
    } else {

        outputsUpdated = false;

        document.getElementById("regular-headline").innerText = ""
        document.getElementById("regular-margin").innerText = ""
        document.getElementById("special-headline").innerText = ""
        document.getElementById("special-margin").innerText = ""

        for (const item of document.querySelectorAll(".ph-item")) {
            item.classList.remove("d-none")
        }


        let weigh_on = Array.from(document.querySelectorAll('input.subOption.weight:checked')).map(
            function (element) {
                return element.id;
            }
        )

        const weigh_on_key = ['gender', 'race', 'education', 'income', 'age', 'vote2016', 'vote2020', 'loc_county',
            'gss_trust', 'gss_bible', 'gss_spanking', 'social_fb'];

        let weigh_on_code = ""

        for (let i = 0; i < weigh_on_key.length; i++) {
            if (weigh_on.includes(weigh_on_key[i])){
                weigh_on_code += "1"
            } else {
                weigh_on_code += "0"
            }
        }


        let body = {
            "very likely": parseFloat(document.getElementById("veryLikely").value),
            "already voted": parseFloat(document.getElementById("alreadyVoted").value),
            "likely": parseFloat(document.getElementById("likely").value),
            "somewhat likely": parseFloat(document.getElementById("somewhatLikely").value),
            "neither likely": parseFloat(document.getElementById("neitherLikelyNorUnlikely").value),
            "somewhat unlikely": parseFloat(document.getElementById("somewhatUnlikely").value),
            "unlikely": parseFloat(document.getElementById("unlikely").value),
            "2020 voted": parseFloat(document.getElementById("turnout2020").value),
            "weigh_on_code": weigh_on_code
        }


        if (JSON.stringify(old_body) === JSON.stringify(body) ) {
            console.log("here")
            handleResponse(old_response)
        } else {
            old_body = body;
            postData("https://i8mdraho5k.execute-api.us-east-1.amazonaws.com/prod4/inhousepolls/weight\n",
                body).then(handleResponse).catch()
        }


    }
}

function handleResponse(data) {
    old_response = data;
    for (const item of document.querySelectorAll(".ph-item")) {
        item.classList.add("d-none")
    }

    let regular = document.getElementById("likely-voter-on").checked ? data["ossoff_perdue_demo_likely"] : data["ossoff_perdue_demo"]
    document.getElementById("regular-headline").innerText = (regular["headline"] > 0 ? "Ossoff +" : "Perdue +") + (Math.round(Math.abs(regular["headline"]) * 100) / 100).toFixed(1) + "%"
    document.getElementById("regular-margin").innerHTML = "&#177;" + (Math.round(Math.abs(regular["moe"]) * 100) / 100).toFixed(1)

    let special = document.getElementById("likely-voter-on").checked ? data["warnock_loeffler_demo_likely"] : data["warnock_loeffler_demo"]

    document.getElementById("special-headline").innerText = (special["headline"] > 0 ? "Warnock +" : "Loeffler +") + (Math.round(Math.abs(special["headline"]) * 100) / 100).toFixed(1) + "%"
    document.getElementById("special-margin").innerHTML = "&#177;" + (Math.round(Math.abs(special["moe"]) * 100) / 100).toFixed(1)
}

function ready() {
    registerCheckboxUpdateHandler();
    getUpdatedValues();
}

document.addEventListener("DOMContentLoaded", ready, false)


// from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Example POST method implementation:
async function postData(url = '', data = {}) {
    updateIndexRequest++;
    let initUpdateIndexRequest = updateIndexRequest;

    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    //this function has been called again so we can discard. todo https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request
    if (updateIndexRequest !== initUpdateIndexRequest) {
        throw Error("no longer needed")
    }

    return response.json(); // parses JSON response into native JavaScript objects
}