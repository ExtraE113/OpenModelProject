function handleChange() {
    let covid = document.getElementById("covid").checked
    let trafalgar = document.getElementById("trafalgar").checked
    let avg = document.getElementById("average").value

    let senario = (covid ? "c" : "x") + (trafalgar ? "t" : "x") + avg

    let dsenate, ossoff, warnock

    switch (senario){
        case "ctSimple Average":
            dsenate = "23%"
            ossoff = "28%"
            warnock = "37%"
            break;
        case "ctWeighted Average":
            dsenate = "26%"
            ossoff = "31%"
            warnock = "37%"
            break;
        case "xtSimple Average":
            dsenate = "27%"
            ossoff = "31%"
            warnock = "42%"
            break;
        case "xtWeighted Average":
            dsenate = "31%"
            ossoff = "36%"
            warnock = "43%"
            break;
        case "cxSimple Average":
            dsenate = "22%"
            ossoff = "26%"
            warnock = "38%"
            break;
        case "cxWeighted Average":
            dsenate = "24%"
            ossoff = "28%"
            warnock = "39%"
            break;
        case "xxSimple Average":
            dsenate = "25%"
            ossoff = "29%"
            warnock = "42%"
            break;
        case "xxWeighted Average":
            dsenate = "28%"
            ossoff = "33%"
            warnock = "45%"
            break;
        default:
            console.error("no senario matched!");
            break;
    }

    document.getElementById("dsenate").innerText = dsenate;
    document.getElementById("ossoff").innerText = ossoff;
    document.getElementById("warnock").innerText = warnock;

}

function ready() {
    handleChange();
    let elements = document.getElementsByClassName("model-switcher")
    for (const element of elements) {
        element.addEventListener("change", handleChange)
    }
}

document.addEventListener("DOMContentLoaded", ready, false)