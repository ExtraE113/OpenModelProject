function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {	
        "xsxx": [25, 30, 43],
        "csxx": [19, 23, 35],
        "xwxx": [30, 35, 44],
        "cwxx": [22, 27, 35],
        "xspx": [26, 30, 42],
        "cspx": [22, 25, 35],
        "xwpx": [30, 35, 44],
        "cwpx": [24, 28, 35],
        "xsxe": [27, 31, 42],
        "csxe": [24, 28, 38],
        "xwxe": [29, 34, 43],
        "cwxe": [25, 30, 38],
        "xspe": [28, 32, 41],
        "cspe": [25, 29, 38],
        "xwpe": [29, 34, 42],
        "cwpe": [26, 31, 38]
    }	

    let [dsenate, ossoff, warnock] = data[scenario];


    document.getElementById("dsenate").innerText = dsenate + "%";
    document.getElementById("ossoff").innerText = ossoff + "%";
    document.getElementById("warnock").innerText = warnock + "%";

}

function ready() {
    handleChange();
    let elements = document.getElementsByClassName("model-switcher")
    for (const element of elements) {
        element.addEventListener("change", handleChange)
    }
}

document.addEventListener("DOMContentLoaded", ready, false)
