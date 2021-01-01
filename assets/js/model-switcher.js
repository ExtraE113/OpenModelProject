function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.38, 0.38, "Ossoff margin: -1 (80% CI: -5 to 3)", 0.51, "Warnock margin: 0 (80% CI: -4 to 4)"],
        "csxx": [0.28, 0.28, "Ossoff margin: -2 (80% CI: -6 to 2)", 0.39, "Warnock margin: -0.9 (80% CI: -4.9 to 3)"],
        "xwxx": [0.5, 0.55, "Ossoff margin: 0.4 (80% CI: -3.6 to 4.4)", 0.58, "Warnock margin: 0.7 (80% CI: -3.4 to 4.7)"],
        "cwxx": [0.36, 0.4, "Ossoff margin: -0.8 (80% CI: -4.9 to 3.2)", 0.44, "Warnock margin: -0.6 (80% CI: -4.6 to 3.5)"],
        "xspx": [0.38, 0.39, "Ossoff margin: -1 (80% CI: -5 to 3)", 0.5, "Warnock margin: 0 (80% CI: -4 to 4)"],
        "cspx": [0.3, 0.3, "Ossoff margin: -2 (80% CI: -6 to 2)", 0.4, "Warnock margin: -0.9 (80% CI: -4.9 to 3)"],
        "xwpx": [0.48, 0.54, "Ossoff margin: 0.4 (80% CI: -3.6 to 4.4)", 0.57, "Warnock margin: 0.7 (80% CI: -3.4 to 4.7)"],
        "cwpx": [0.37, 0.41, "Ossoff margin: -0.8 (80% CI: -4.9 to 3.2)", 0.44, "Warnock margin: -0.6 (80% CI: -4.6 to 3.5)"],
        "xsxe": [0.33, 0.34, "Ossoff margin: -1.4 (80% CI: -5.4 to 2.6)", 0.45, "Warnock margin: -0.4 (80% CI: -4.4 to 3.5)"],
        "csxe": [0.28, 0.29, "Ossoff margin: -1.9 (80% CI: -5.9 to 2.1)", 0.39, "Warnock margin: -0.9 (80% CI: -4.9 to 3.1)"],
        "xwxe": [0.39, 0.42, "Ossoff margin: -0.7 (80% CI: -4.7 to 3.3)", 0.49, "Warnock margin: -0.1 (80% CI: -4.1 to 3.9)"],
        "cwxe": [0.32, 0.35, "Ossoff margin: -1.3 (80% CI: -5.3 to 2.7)", 0.41, "Warnock margin: -0.7 (80% CI: -4.8 to 3.3)"],
        "xspe": [0.34, 0.35, "Ossoff margin: -1.4 (80% CI: -5.4 to 2.6)", 0.45, "Warnock margin: -0.4 (80% CI: -4.4 to 3.5)"],
        "cspe": [0.3, 0.31, "Ossoff margin: -1.9 (80% CI: -5.9 to 2.1)", 0.4, "Warnock margin: -0.9 (80% CI: -4.9 to 3.1)"],
        "xwpe": [0.39, 0.42, "Ossoff margin: -0.7 (80% CI: -4.7 to 3.3)", 0.49, "Warnock margin: -0.1 (80% CI: -4.1 to 3.9)"],
        "cwpe": [0.33, 0.36, "Ossoff margin: -1.3 (80% CI: -5.3 to 2.7)", 0.42, "Warnock margin: -0.7 (80% CI: -4.8 to 3.3)"]
    }

    let [dsenate, ossoff, ossoff_margin, warnock, warnock_margin] = data[scenario];


    document.getElementById("dsenate").innerText = Math.round(dsenate * 100) + "%";
    document.getElementById("ossoff").innerText = Math.round(ossoff * 100) + "%";
    document.getElementById("warnock").innerText = Math.round(warnock * 100) + "%";

    document.getElementById("ossoff-mov").innerText = ossoff_margin;
    document.getElementById("warnock-mov").innerText = warnock_margin;

}

function ready() {
    handleChange();
    let elements = document.getElementsByClassName("model-switcher")
    for (const element of elements) {
        element.addEventListener("change", handleChange)
    }
}

document.addEventListener("DOMContentLoaded", ready, false)
