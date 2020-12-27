function registerCheckboxUpdateHandler() {
    const checkboxGroups = [
        {
            "id": "census-overall",
            "class": "census-data",
        },
        {
            "id": "past-vote-overall",
            "class": "past-vote-data",
        },
        {
            "id": "experimental-overall",
            "class": "experimental-data",
        }
    ]

    for (const cbGroup of checkboxGroups) {
        let checkboxes = document.querySelectorAll('input.subOption.' + cbGroup["class"]),
            checkall = document.getElementById(cbGroup["id"]);

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].onclick = function () {
                let checkedCount = document.querySelectorAll('input.subOption.' + cbGroup["class"] + ':checked').length;

                checkall.checked = checkedCount > 0;
                checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
            }
        }

        checkall.onclick = function () {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = this.checked;
            }
        }
    }
}
