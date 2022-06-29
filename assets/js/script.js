console.log("js file is loaded");

const inputBillEl = document.querySelector('#bill');
const inputPeopleEl = document.querySelector('#people');
const splitResultsEl = document.querySelector('#split-result');
const extraResultsEl = document.querySelector('#extra-result');

function ParseFloat(str, val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str);
}

var splitBill = function () {
    let bill = inputBillEl.value;
    let people = inputPeopleEl.value;
    if (bill == null || people == null || people == 0) {
        return;
    }
    let split = ParseFloat((bill / people), 2).toFixed(2);
    let extra = ParseFloat((bill - (split * people)), 2);
    splitResultsEl.innerHTML = `Even $${split} per Person`;
    if (extra !== 0) {
        extraResultsEl.innerHTML = `With $${extra} leftover`;
    } else {
        extraResultsEl.innerHTML = ``;
    }
}

document.getElementById("bill").onblur = function () {
    if (inputBillEl.value == null) {
        return;
    }
    inputBillEl.value = parseFloat(inputBillEl.value).toFixed(2);
};

document.getElementById("people").onblur = function () {
    if (inputPeopleEl.value == null) {
        return;
    }
    inputPeopleEl.value = parseInt(inputPeopleEl.value);
};

document.querySelector("#btn-split").addEventListener('click', splitBill);