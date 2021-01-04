function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.49, 0.51, "Ossoff margin: 0.1 (80% CI: -3.9 to 4)", 0.6, "Warnock margin: 0.9 (80% CI: -3.1 to 4.8)"],
        "csxx": [0.36, 0.38, "Ossoff margin: -1 (80% CI: -4.9 to 2.9)", 0.47, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwxx": [0.64, 0.69, "Ossoff margin: 1.6 (80% CI: -2.3 to 5.5)", 0.7, "Warnock margin: 1.8 (80% CI: -2.2 to 5.7)"],
        "cwxx": [0.49, 0.54, "Ossoff margin: 0.3 (80% CI: -3.6 to 4.2)", 0.56, "Warnock margin: 0.5 (80% CI: -3.5 to 4.4)"],
        "xspx": [0.49, 0.52, "Ossoff margin: 0.1 (80% CI: -3.9 to 4)", 0.6, "Warnock margin: 0.9 (80% CI: -3.1 to 4.8)"],
        "cspx": [0.39, 0.4, "Ossoff margin: -1 (80% CI: -4.9 to 2.9)", 0.49, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwpx": [0.61, 0.68, "Ossoff margin: 1.6 (80% CI: -2.3 to 5.5)", 0.69, "Warnock margin: 1.8 (80% CI: -2.2 to 5.7)"],
        "cwpx": [0.49, 0.55, "Ossoff margin: 0.3 (80% CI: -3.6 to 4.2)", 0.56, "Warnock margin: 0.5 (80% CI: -3.5 to 4.4)"],
        "xsxe": [0.38, 0.39, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.5, "Warnock margin: 0 (80% CI: -3.9 to 3.9)"],
        "csxe": [0.32, 0.33, "Ossoff margin: -1.4 (80% CI: -5.3 to 2.5)", 0.43, "Warnock margin: -0.6 (80% CI: -4.5 to 3.4)"],
        "xwxe": [0.46, 0.49, "Ossoff margin: -0.1 (80% CI: -4 to 3.8)", 0.55, "Warnock margin: 0.4 (80% CI: -3.5 to 4.3)"],
        "cwxe": [0.38, 0.41, "Ossoff margin: -0.7 (80% CI: -4.7 to 3.2)", 0.47, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xspe": [0.41, 0.42, "Ossoff margin: -0.9 (80% CI: -4.8 to 3)", 0.51, "Warnock margin: 0 (80% CI: -3.9 to 3.9)"],
        "cspe": [0.36, 0.36, "Ossoff margin: -1.4 (80% CI: -5.3 to 2.5)", 0.45, "Warnock margin: -0.6 (80% CI: -4.5 to 3.4)"],
        "xwpe": [0.47, 0.5, "Ossoff margin: -0.1 (80% CI: -4 to 3.8)", 0.56, "Warnock margin: 0.4 (80% CI: -3.5 to 4.3)"],
        "cwpe": [0.4, 0.43, "Ossoff margin: -0.7 (80% CI: -4.7 to 3.2)", 0.49, "Warnock margin: -0.2 (80% CI: -4.1 to 3.7)"]],
    }

    let last_updated = "2021-01-04"

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
