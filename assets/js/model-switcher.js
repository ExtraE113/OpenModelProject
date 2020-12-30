function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.3, 0.3, "Ossoff margin: -1.8 (80% CI: -5.8 to 2.3)", 0.42, "Warnock margin: -0.7 (80% CI: -4.7 to 3.4)"],
        "csxx": [0.22, 0.22, "Ossoff margin: -2.7 (80% CI: -6.7 to 1.4)", 0.32, "Warnock margin: -1.6 (80% CI: -5.6 to 2.5)"],
        "xwxx": [0.41, 0.47, "Ossoff margin: -0.3 (80% CI: -4.4 to 3.8)", 0.48, "Warnock margin: -0.1 (80% CI: -4.2 to 4)"],
        "cwxx": [0.29, 0.34, "Ossoff margin: -1.4 (80% CI: -5.5 to 2.7)", 0.35, "Warnock margin: -1.3 (80% CI: -5.4 to 2.8)"],
        "xspx": [0.31, 0.31, "Ossoff margin: -1.8 (80% CI: -5.8 to 2.3)", 0.42, "Warnock margin: -0.7 (80% CI: -4.7 to 3.4)"],
        "cspx": [0.24, 0.24, "Ossoff margin: -2.7 (80% CI: -6.7 to 1.4)", 0.33, "Warnock margin: -1.6 (80% CI: -5.6 to 2.5)"],
        "xwpx": [0.4, 0.46, "Ossoff margin: -0.3 (80% CI: -4.4 to 3.8)", 0.48, "Warnock margin: -0.1 (80% CI: -4.2 to 4)"],
        "cwpx": [0.29, 0.34, "Ossoff margin: -1.4 (80% CI: -5.5 to 2.7)", 0.36, "Warnock margin: -1.3 (80% CI: -5.4 to 2.8)"],
        "xsxe": [0.29, 0.3, "Ossoff margin: -1.8 (80% CI: -5.8 to 2.3)", 0.41, "Warnock margin: -0.8 (80% CI: -4.8 to 3.3)"],
        "csxe": [0.25, 0.26, "Ossoff margin: -2.2 (80% CI: -6.3 to 1.8)", 0.35, "Warnock margin: -1.2 (80% CI: -5.3 to 2.8)"],
        "xwxe": [0.35, 0.38, "Ossoff margin: -1 (80% CI: -5.1 to 3)", 0.44, "Warnock margin: -0.5 (80% CI: -4.6 to 3.6)"],
        "cwxe": [0.29, 0.32, "Ossoff margin: -1.6 (80% CI: -5.7 to 2.5)", 0.37, "Warnock margin: -1.1 (80% CI: -5.2 to 3)"],
        "xspe": [0.3, 0.31, "Ossoff margin: -1.8 (80% CI: -5.8 to 2.3)", 0.4, "Warnock margin: -0.8 (80% CI: -4.8 to 3.3)"],
        "cspe": [0.27, 0.27, "Ossoff margin: -2.2 (80% CI: -6.3 to 1.8)", 0.36, "Warnock margin: -1.2 (80% CI: -5.3 to 2.8)"],
        "xwpe": [0.34, 0.38, "Ossoff margin: -1 (80% CI: -5.1 to 3)", 0.43, "Warnock margin: -0.5 (80% CI: -4.6 to 3.6)"],
        "cwpe": [0.29, 0.32, "Ossoff margin: -1.6 (80% CI: -5.7 to 2.5)", 0.38, "Warnock margin: -1.1 (80% CI: -5.2 to 3)"],
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
