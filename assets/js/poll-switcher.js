function handleChange() {
    let traditionalWeight = document.getElementById("weighting").value.includes("Traditional")
    let likelyModel = document.getElementById("likely").value.includes("Likely")

    let scenario = (traditionalWeight ? "t" : "f") + (likelyModel ? "l" : "r")

    //senario: [ossoff margin, ossoff MOE, warnock margin, warnock MOE]
    let data = {
        "tr": [1.3, 4.6, 2.0, 4.6],
        "tl": [-3.8, 4.7, -3.0, 4.7],
        "fr": [3.6, 4.6, 4.1, 4.6],
        "fl": [-1.9, 4.7, -1.4, 4.7],
    }

    let [ossoff, ossoffMOE, warnock, warnockMOE] = data[scenario];


    document.getElementById("special-headline").innerHTML = (warnock >= 0 ? "Warnock +" : "Loeffler +") + (Math.round(Math.abs(warnock) * 100) / 100).toFixed(1) + "%";
    document.getElementById("special-margin").innerHTML = "&#177;" + warnockMOE;
    document.getElementById("regular-headline").innerHTML = (ossoff >= 0 ? "Ossoff +" : "Perdue +") + (Math.round(Math.abs(ossoff) * 100) / 100).toFixed(1) + "%";
    document.getElementById("regular-margin").innerHTML = "&#177;" + ossoffMOE;


}

function ready() {
    handleChange();
}

document.addEventListener("DOMContentLoaded", ready, false)