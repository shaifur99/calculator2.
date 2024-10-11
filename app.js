function appendValue(value) {
    document.calcForm.display.value += value;
}

function clearDisplay() {
    document.calcForm.display.value = '';
}

function deleteLast() {
    let currentDisplay = document.calcForm.display.value;
    document.calcForm.display.value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.calcForm.display.value);
        document.calcForm.display.value = result;
    } catch (error) {
        document.calcForm.display.value = 'Error';
    }
}
