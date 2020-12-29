function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.25, 0.29, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.41, "Margin: -0.8 (80% CI: -4.8 to 3.3)"],
        "csxx": [0.18, 0.22, "Margin: -2.7 (80% CI: -6.7 to 1.4)", 0.31, "Margin: -1.6 (80% CI: -5.7 to 2.4)"],
        "xwxx": [0.38, 0.44, "Margin: -0.5 (80% CI: -4.6 to 3.6)", 0.46, "Margin: -0.3 (80% CI: -4.4 to 3.8)"],
        "cwxx": [0.27, 0.33, "Margin: -1.5 (80% CI: -5.6 to 2.6)", 0.34, "Margin: -1.3 (80% CI: -5.4 to 2.7)"],
        "xspx": [0.26, 0.3, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.4, "Margin: -0.8 (80% CI: -4.8 to 3.3)"],
        "cspx": [0.21, 0.23, "Margin: -2.7 (80% CI: -6.7 to 1.4)", 0.32, "Margin: -1.6 (80% CI: -5.7 to 2.4)"],
        "xwpx": [0.37, 0.44, "Margin: -0.5 (80% CI: -4.6 to 3.6)", 0.46, "Margin: -0.3 (80% CI: -4.4 to 3.8)"],
        "cwpx": [0.28, 0.33, "Margin: -1.5 (80% CI: -5.6 to 2.6)", 0.35, "Margin: -1.3 (80% CI: -5.4 to 2.7)"],
        "xsxe": [0.25, 0.29, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.4, "Margin: -0.8 (80% CI: -4.9 to 3.2)"],
        "csxe": [0.21, 0.25, "Margin: -2.2 (80% CI: -6.3 to 1.8)", 0.35, "Margin: -1.3 (80% CI: -5.3 to 2.8)"],
        "xwxe": [0.31, 0.37, "Margin: -1.1 (80% CI: -5.2 to 3)", 0.43, "Margin: -0.6 (80% CI: -4.7 to 3.5)"],
        "cwxe": [0.26, 0.31, "Margin: -1.7 (80% CI: -5.8 to 2.4)", 0.37, "Margin: -1.1 (80% CI: -5.2 to 3)"],
        "xspe": [0.26, 0.3, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.4, "Margin: -0.8 (80% CI: -4.9 to 3.2)"],
        "cspe": [0.23, 0.27, "Margin: -2.2 (80% CI: -6.3 to 1.8)", 0.36, "Margin: -1.3 (80% CI: -5.3 to 2.8)"],
        "xwpe": [0.31, 0.37, "Margin: -1.1 (80% CI: -5.2 to 3)", 0.42, "Margin: -0.6 (80% CI: -4.7 to 3.5)"],
        "cwpe": [0.27, 0.32, "Margin: -1.7 (80% CI: -5.8 to 2.4)", 0.37, "Margin: -1.1 (80% CI: -5.2 to 3)"]
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
