function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [23, 27, 42],
        "csxx": [14, 18, 28],
        "xwxx": [35, 41, 46],
        "cwxx": [20, 25, 29],
        "xspx": [24, 28, 41],
        "cspx": [17, 19, 29],
        "xwpx": [34, 40, 45],
        "cwpx": [22, 26, 29],
        "xsxe": [26, 30, 42],
        "csxe": [21, 25, 35],
        "xwxe": [31, 37, 43],
        "cwxe": [24, 29, 35],
        "xspe": [26, 31, 41],
        "cspe": [23, 26, 35],
        "xwpe": [31, 36, 43],
        "cwpe": [25, 30, 35]
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