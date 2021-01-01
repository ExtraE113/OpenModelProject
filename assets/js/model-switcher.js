function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.33, 0.33, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.5)", 0.46, "Warnock margin: -0.4 (80% CI: -4.4 to 3.6)"],
        "csxx": [0.24, 0.24, "Ossoff margin: -2.4 (80% CI: -6.4 to 1.6)", 0.35, "Warnock margin: -1.3 (80% CI: -5.3 to 2.7)"],
        "xwxx": [0.45, 0.49, "Ossoff margin: -0.1 (80% CI: -4.1 to 4)", 0.53, "Warnock margin: 0.2 (80% CI: -3.8 to 4.2)"],
        "cwxx": [0.32, 0.36, "Ossoff margin: -1.2 (80% CI: -5.3 to 2.8)", 0.39, "Warnock margin: -1 (80% CI: -5 to 3.1)"],
        "xspx": [0.34, 0.34, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.5)", 0.45, "Warnock margin: -0.4 (80% CI: -4.4 to 3.6)"],
        "cspx": [0.26, 0.26, "Ossoff margin: -2.4 (80% CI: -6.4 to 1.6)", 0.36, "Warnock margin: -1.3 (80% CI: -5.3 to 2.7)"],
        "xwpx": [0.43, 0.49, "Ossoff margin: -0.1 (80% CI: -4.1 to 4)", 0.52, "Warnock margin: 0.2 (80% CI: -3.8 to 4.2)"],
        "cwpx": [0.32, 0.37, "Ossoff margin: -1.2 (80% CI: -5.3 to 2.8)", 0.39, "Warnock margin: -1 (80% CI: -5 to 3.1)"],
        "xsxe": [0.31, 0.31, "Ossoff margin: -1.6 (80% CI: -5.6 to 2.4)", 0.42, "Warnock margin: -0.6 (80% CI: -4.6 to 3.4)"],
        "csxe": [0.27, 0.27, "Ossoff margin: -2.1 (80% CI: -6.1 to 1.9)", 0.37, "Warnock margin: -1.1 (80% CI: -5.1 to 2.9)"],
        "xwxe": [0.36, 0.39, "Ossoff margin: -0.9 (80% CI: -5 to 3.1)", 0.46, "Warnock margin: -0.3 (80% CI: -4.4 to 3.7)"],
        "cwxe": [0.3, 0.33, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.5)", 0.39, "Warnock margin: -0.9 (80% CI: -5 to 3.1)"],
        "xspe": [0.32, 0.33, "Ossoff margin: -1.6 (80% CI: -5.6 to 2.4)", 0.43, "Warnock margin: -0.6 (80% CI: -4.6 to 3.4)"],
        "cspe": [0.28, 0.29, "Ossoff margin: -2.1 (80% CI: -6.1 to 1.9)", 0.38, "Warnock margin: -1.1 (80% CI: -5.1 to 2.9)"],
        "xwpe": [0.36, 0.4, "Ossoff margin: -0.9 (80% CI: -5 to 3.1)", 0.46, "Warnock margin: -0.3 (80% CI: -4.4 to 3.7)"],
        "cwpe": [0.31, 0.34, "Ossoff margin: -1.5 (80% CI: -5.5 to 2.5)", 0.4, "Warnock margin: -0.9 (80% CI: -5 to 3.1)"]
    }

    let last_updated = "2020-12-31"

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
