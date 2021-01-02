function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.43, 0.44, "Ossoff margin: -0.5 (80% CI: -4.5 to 3.4)", 0.55, "Warnock margin: 0.4 (80% CI: -3.5 to 4.4)"],
        "csxx": [0.32, 0.32, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.4)", 0.43, "Warnock margin: -0.6 (80% CI: -4.5 to 3.4)"],
        "xwxx": [0.57, 0.61, "Ossoff margin: 1 (80% CI: -3 to 5)", 0.64, "Warnock margin: 1.2 (80% CI: -2.8 to 5.2)"],
        "cwxx": [0.42, 0.47, "Ossoff margin: -0.3 (80% CI: -4.3 to 3.7)", 0.49, "Warnock margin: 0 (80% CI: -4 to 4)"],
        "xspx": [0.43, 0.44, "Ossoff margin: -0.5 (80% CI: -4.5 to 3.4)", 0.55, "Warnock margin: 0.4 (80% CI: -3.5 to 4.4)"],
        "cspx": [0.34, 0.34, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.4)", 0.44, "Warnock margin: -0.6 (80% CI: -4.5 to 3.4)"],
        "xwpx": [0.54, 0.6, "Ossoff margin: 1 (80% CI: -3 to 5)", 0.63, "Warnock margin: 1.2 (80% CI: -2.8 to 5.2)"],
        "cwpx": [0.42, 0.47, "Ossoff margin: -0.3 (80% CI: -4.3 to 3.7)", 0.5, "Warnock margin: 0 (80% CI: -4 to 4)"],
        "xsxe": [0.36, 0.36, "Ossoff margin: -1.2 (80% CI: -5.1 to 2.8)", 0.47, "Warnock margin: -0.2 (80% CI: -4.2 to 3.7)"],
        "csxe": [0.3, 0.31, "Ossoff margin: -1.7 (80% CI: -5.6 to 2.3)", 0.41, "Warnock margin: -0.7 (80% CI: -4.7 to 3.2)"],
        "xwxe": [0.42, 0.45, "Ossoff margin: -0.4 (80% CI: -4.4 to 3.6)", 0.52, "Warnock margin: 0.1 (80% CI: -3.9 to 4.1)"],
        "cwxe": [0.35, 0.38, "Ossoff margin: -1 (80% CI: -5 to 3)", 0.44, "Warnock margin: -0.5 (80% CI: -4.5 to 3.5)"],
        "xspe": [0.37, 0.38, "Ossoff margin: -1.2 (80% CI: -5.1 to 2.8)", 0.48, "Warnock margin: -0.2 (80% CI: -4.2 to 3.7)"],
        "cspe": [0.32, 0.33, "Ossoff margin: -1.7 (80% CI: -5.6 to 2.3)", 0.42, "Warnock margin: -0.7 (80% CI: -4.7 to 3.2)"],
        "xwpe": [0.42, 0.46, "Ossoff margin: -0.4 (80% CI: -4.4 to 3.6)", 0.52, "Warnock margin: 0.1 (80% CI: -3.9 to 4.1)"],
        "cwpe": [0.36, 0.39, "Ossoff margin: -1 (80% CI: -5 to 3)", 0.45, "Warnock margin: -0.5 (80% CI: -4.5 to 3.5)"]
    }

    let last_updated = "2021-01-02"

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
