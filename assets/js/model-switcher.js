function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.49, 0.51, "Ossoff margin: 0.1 (80% CI: -3.9 to 4)", 0.6, "Warnock margin: 0.8 (80% CI: -3.1 to 4.7)"],
        "csxx": [0.36, 0.37, "Ossoff margin: -1 (80% CI: -5 to 2.9)", 0.47, "Warnock margin: -0.3 (80% CI: -4.2 to 3.6)"],
        "xwxx": [0.63, 0.68, "Ossoff margin: 1.5 (80% CI: -2.4 to 5.5)", 0.69, "Warnock margin: 1.7 (80% CI: -2.2 to 5.6)"],
        "cwxx": [0.47, 0.53, "Ossoff margin: 0.2 (80% CI: -3.7 to 4.1)", 0.54, "Warnock margin: 0.4 (80% CI: -3.6 to 4.3)"],
        "xspx": [0.49, 0.52, "Ossoff margin: 0.1 (80% CI: -3.9 to 4)", 0.6, "Warnock margin: 0.8 (80% CI: -3.1 to 4.7)"],
        "cspx": [0.39, 0.4, "Ossoff margin: -1 (80% CI: -5 to 2.9)", 0.48, "Warnock margin: -0.3 (80% CI: -4.2 to 3.6)"],
        "xwpx": [0.61, 0.67, "Ossoff margin: 1.5 (80% CI: -2.4 to 5.5)", 0.68, "Warnock margin: 1.7 (80% CI: -2.2 to 5.6)"],
        "cwpx": [0.48, 0.53, "Ossoff margin: 0.2 (80% CI: -3.7 to 4.1)", 0.55, "Warnock margin: 0.4 (80% CI: -3.6 to 4.3)"],
        "xsxe": [0.38, 0.39, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.5, "Warnock margin: 0 (80% CI: -4 to 3.9)"],
        "csxe": [0.32, 0.33, "Ossoff margin: -1.4 (80% CI: -5.3 to 2.5)", 0.43, "Warnock margin: -0.6 (80% CI: -4.5 to 3.3)"],
        "xwxe": [0.45, 0.48, "Ossoff margin: -0.1 (80% CI: -4 to 3.8)", 0.55, "Warnock margin: 0.4 (80% CI: -3.5 to 4.3)"],
        "cwxe": [0.37, 0.4, "Ossoff margin: -0.8 (80% CI: -4.7 to 3.1)", 0.47, "Warnock margin: -0.3 (80% CI: -4.2 to 3.6)"],
        "xspe": [0.4, 0.41, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.51, "Warnock margin: 0 (80% CI: -4 to 3.9)"],
        "cspe": [0.35, 0.36, "Ossoff margin: -1.4 (80% CI: -5.3 to 2.5)", 0.45, "Warnock margin: -0.6 (80% CI: -4.5 to 3.3)"],
        "xwpe": [0.46, 0.5, "Ossoff margin: -0.1 (80% CI: -4 to 3.8)", 0.55, "Warnock margin: 0.4 (80% CI: -3.5 to 4.3)"],
        "cwpe": [0.4, 0.42, "Ossoff margin: -0.8 (80% CI: -4.7 to 3.1)", 0.48, "Warnock margin: -0.3 (80% CI: -4.2 to 3.6)"]
    }

    let last_updated = "2021-01-04 4:30PM ET"

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
