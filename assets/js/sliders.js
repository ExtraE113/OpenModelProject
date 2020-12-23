function ready() {

}

function updateOutputs(){
    let elements = document.getElementsByClassName("auto-output")
    for (const element of elements) {
        let inputId = element.getAttribute("for");
        let inputElement = document.getElementById(inputId);
        element.innerText = inputElement.value;
    }
}

document.addEventListener("DOMContentLoaded", ready, false)