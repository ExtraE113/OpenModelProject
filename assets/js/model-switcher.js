function handleChange() {
    let covid = document.getElementById("covid").checked
    let market = document.getElementById("market").checked
    let prior = document.getElementById("prior").checked
    let avg = document.getElementById("average").value

    let scenario = (covid ? "c" : "x") + (avg.includes("imple") ? "s" : "w") + (market ? "p" : "x") + (prior ? "e" : "x")

    let data = {
        "xsxx": [0.25, 0.29, "Margin: -1.9 (80% CI: -6 to 2.2)", 0.42, "Margin: -0.7 (80% CI: -4.8 to 3.4)"],
        "csxx": [0.19, 0.22, "Margin: -2.6 (80% CI: -6.7 to 1.4)", 0.34, "Margin: -1.4 (80% CI: -5.5 to 2.6)"],
        "xwxx": [0.27, 0.32, "Margin: -1.6 (80% CI: -5.7 to 2.5)", 0.41, "Margin: -0.7 (80% CI: -4.8 to 3.4)"],
        "cwxx": [0.2, 0.24, "Margin: -2.5 (80% CI: -6.6 to 1.6)", 0.32, "Margin: -1.6 (80% CI: -5.7 to 2.5)"],
        "xspx": [0.26, 0.3, "Margin: -1.9 (80% CI: -6 to 2.2)", 0.42, "Margin: -0.7 (80% CI: -4.8 to 3.4)"],
        "cspx": [0.21, 0.24, "Margin: -2.6 (80% CI: -6.7 to 1.4)", 0.34, "Margin: -1.4 (80% CI: -5.5 to 2.6)"],
        "xwpx": [0.28, 0.33, "Margin: -1.6 (80% CI: -5.7 to 2.5)", 0.41, "Margin: -0.7 (80% CI: -4.8 to 3.4)"],
        "cwpx": [0.22, 0.25, "Margin: -2.5 (80% CI: -6.6 to 1.6)", 0.32, "Margin: -1.6 (80% CI: -5.7 to 2.5)"],
        "xsxe": [0.25, 0.29, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.41, "Margin: -0.8 (80% CI: -4.9 to 3.3)"],
        "csxe": [0.22, 0.26, "Margin: -2.2 (80% CI: -6.3 to 1.9)", 0.36, "Margin: -1.2 (80% CI: -5.2 to 2.9)"],
        "xwxe": [0.26, 0.31, "Margin: -1.7 (80% CI: -5.8 to 2.4)", 0.4, "Margin: -0.8 (80% CI: -4.9 to 3.3)"],
        "cwxe": [0.22, 0.27, "Margin: -2.1 (80% CI: -6.2 to 2)", 0.35, "Margin: -1.3 (80% CI: -5.4 to 2.8)"],
        "xspe": [0.26, 0.3, "Margin: -1.8 (80% CI: -5.9 to 2.2)", 0.4, "Margin: -0.8 (80% CI: -4.9 to 3.3)"],
        "cspe": [0.24, 0.27, "Margin: -2.2 (80% CI: -6.3 to 1.9)", 0.37, "Margin: -1.2 (80% CI: -5.2 to 2.9)"],
        "xwpe": [0.27, 0.32, "Margin: -1.7 (80% CI: -5.8 to 2.4)", 0.4, "Margin: -0.8 (80% CI: -4.9 to 3.3)"],
        "cwpe": [0.24, 0.28, "Margin: -2.1 (80% CI: -6.2 to 2)", 0.36, "Margin: -1.3 (80% CI: -5.4 to 2.8)"]
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
