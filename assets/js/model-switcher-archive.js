function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.51, 0.53, "Margin: 0.3 (80% CI: -3.6 to 4.1)", 0.62, "Margin: 1 (80% CI: -2.9 to 4.8)"],
        "csxx": [0.37, 0.39, "Margin: -0.9 (80% CI: -4.8 to 3)", 0.48, "Margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwxx": [0.66, 0.71, "Margin: 1.8 (80% CI: -2.1 to 5.6)", 0.71, "Margin: 1.8 (80% CI: -2 to 5.7)"],
        "cwxx": [0.49, 0.54, "Margin: 0.4 (80% CI: -3.5 to 4.2)", 0.55, "Margin: 0.4 (80% CI: -3.4 to 4.3)"],
        "xspx": [0.51, 0.53, "Margin: 0.3 (80% CI: -3.6 to 4.1)", 0.62, "Margin: 1 (80% CI: -2.9 to 4.8)"],
        "cspx": [0.39, 0.4, "Margin: -0.9 (80% CI: -4.8 to 3)", 0.49, "Margin: -0.2 (80% CI: -4.1 to 3.7)"],
        "xwpx": [0.62, 0.69, "Margin: 1.8 (80% CI: -2.1 to 5.6)", 0.7, "Margin: 1.8 (80% CI: -2 to 5.7)"],
        "cwpx": [0.48, 0.54, "Margin: 0.4 (80% CI: -3.5 to 4.2)", 0.56, "Margin: 0.4 (80% CI: -3.4 to 4.3)"],
        "xsxe": [0.39, 0.41, "Margin: -0.8 (80% CI: -4.6 to 3.1)", 0.5, "Margin: 0 (80% CI: -3.8 to 3.9)"],
        "csxe": [0.33, 0.34, "Margin: -1.3 (80% CI: -5.2 to 2.5)", 0.43, "Margin: -0.5 (80% CI: -4.4 to 3.3)"],
        "xwxe": [0.47, 0.5, "Margin: 0 (80% CI: -3.9 to 3.8)", 0.56, "Margin: 0.5 (80% CI: -3.4 to 4.3)"],
        "cwxe": [0.38, 0.41, "Margin: -0.7 (80% CI: -4.6 to 3.1)", 0.47, "Margin: -0.2 (80% CI: -4.1 to 3.6)"],
        "xspe": [0.41, 0.42, "Margin: -0.8 (80% CI: -4.6 to 3.1)", 0.52, "Margin: 0 (80% CI: -3.8 to 3.9)"],
        "cspe": [0.35, 0.36, "Margin: -1.3 (80% CI: -5.2 to 2.5)", 0.45, "Margin: -0.5 (80% CI: -4.4 to 3.3)"],
        "xwpe": [0.47, 0.5, "Margin: 0 (80% CI: -3.9 to 3.8)", 0.56, "Margin: 0.5 (80% CI: -3.4 to 4.3)"],
        "cwpe": [0.4, 0.42, "Margin: -0.7 (80% CI: -4.6 to 3.1)", 0.48, "Margin: -0.2 (80% CI: -4.1 to 3.6)"]
    }

    let last_updated = "2021-01-05 10AM ET"
    let last_updated_actual = "2021-01-08 1:07 PM ET"

    let ossoff_margin_actual = "+1.1"
    let warnock_margin_actual = "+2.0"

    let [dsenate, ossoff, ossoff_margin, warnock, warnock_margin] = data[scenario];

    document.getElementById("dsenate").innerText = Math.round(dsenate * 100) + "%";
    document.getElementById("ossoff").innerText = Math.round(ossoff * 100) + "%";
    document.getElementById("warnock").innerText = Math.round(warnock * 100) + "%";

    document.getElementById("ossoff-mov").innerText = ossoff_margin;
    document.getElementById("warnock-mov").innerText = warnock_margin;

    document.getElementById("ossoff-mov-actual").innerText = "Actual MOV " + ossoff_margin_actual;
    document.getElementById("warnock-mov-actual").innerText = "Actual MOV " + warnock_margin_actual;

    document.getElementById("last-updated").innerText = "Last updated " + last_updated
    document.getElementById("last-updated-actual").innerText = "Actual vote numbers last updated " + last_updated_actual + "."

}

function ready() {
    handleChange();
    let elements = document.getElementsByClassName("model-switcher")
    for (const element of elements) {
        element.addEventListener("change", handleChange)
    }
}

document.addEventListener("DOMContentLoaded", ready, false)
