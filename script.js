let display = document.getElementById('display');
let currentInput = '';

function append(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString(); 
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
