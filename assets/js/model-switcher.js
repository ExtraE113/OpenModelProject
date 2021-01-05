function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.51, 0.53, "Ossoff margin: 0.3 (80% CI: -3.6 to 4.1)", 0.62, "Warnock margin: 1 (80% CI: -2.9 to 4.8)"],
        "csxx": [0.37, 0.39, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.48, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwxx": [0.66, 0.71, "Ossoff margin: 1.8 (80% CI: -2.1 to 5.6)", 0.71, "Warnock margin: 1.8 (80% CI: -2 to 5.7)"],
        "cwxx": [0.49, 0.54, "Ossoff margin: 0.4 (80% CI: -3.5 to 4.2)", 0.55, "Warnock margin: 0.4 (80% CI: -3.4 to 4.3)"],
        "xspx": [0.51, 0.54, "Ossoff margin: 0.3 (80% CI: -3.6 to 4.1)", 0.62, "Warnock margin: 1 (80% CI: -2.9 to 4.8)"],
        "cspx": [0.4, 0.41, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.49, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwpx": [0.63, 0.7, "Ossoff margin: 1.8 (80% CI: -2.1 to 5.6)", 0.7, "Warnock margin: 1.8 (80% CI: -2 to 5.7)"],
        "cwpx": [0.49, 0.55, "Ossoff margin: 0.4 (80% CI: -3.5 to 4.2)", 0.56, "Warnock margin: 0.4 (80% CI: -3.4 to 4.3)"],
        "xsxe": [0.39, 0.41, "Ossoff margin: -0.8 (80% CI: -4.6 to 3.1)", 0.5, "Warnock margin: 0 (80% CI: -3.8 to 3.9)"],
        "csxe": [0.33, 0.34, "Ossoff margin: -1.3 (80% CI: -5.2 to 2.5)", 0.43, "Warnock margin: -0.5 (80% CI: -4.4 to 3.3)"],
        "xwxe": [0.47, 0.5, "Ossoff margin: 0 (80% CI: -3.9 to 3.8)", 0.56, "Warnock margin: 0.5 (80% CI: -3.4 to 4.3)"],
        "cwxe": [0.38, 0.41, "Ossoff margin: -0.7 (80% CI: -4.6 to 3.1)", 0.47, "Warnock margin: -0.2 (80% CI: -4.1 to 3.6)"],
        "xspe": [0.41, 0.43, "Ossoff margin: -0.8 (80% CI: -4.6 to 3.1)", 0.52, "Warnock margin: 0 (80% CI: -3.8 to 3.9)"],
        "cspe": [0.36, 0.37, "Ossoff margin: -1.3 (80% CI: -5.2 to 2.5)", 0.45, "Warnock margin: -0.5 (80% CI: -4.4 to 3.3)"],
        "xwpe": [0.47, 0.51, "Ossoff margin: 0 (80% CI: -3.9 to 3.8)", 0.56, "Warnock margin: 0.5 (80% CI: -3.4 to 4.3)"],
        "cwpe": [0.4, 0.43, "Ossoff margin: -0.7 (80% CI: -4.6 to 3.1)", 0.48, "Warnock margin: -0.2 (80% CI: -4.1 to 3.6)"],
    }

    let last_updated = "2021-01-05 10AM ET"

    let [dsenate, ossoff, ossoff_margin, warnock, warnock_margin] = data[scenario];


    document.getElementById("dsenate").innerText = Math.round(dsenate * 100) + "%";
    document.getElementById("ossoff").innerText = Math.round(ossoff * 100) + "%";
    document.getElementById("warnock").innerText = Math.round(warnock * 100) + "%";

    document.getElementById("ossoff-mov").innerText = ossoff_margin;
    document.getElementById("warnock-mov").innerText = warnock_margin;

    document.getElementById("last-updated").innerText = "Last updated " + last_updated

}

function ready() {
    handleChange();
    let elements = document.getElementsByClassName("model-switcher")
    for (const element of elements) {
        element.addEventListener("change", handleChange)
    }
}

document.addEventListener("DOMContentLoaded", ready, false)
