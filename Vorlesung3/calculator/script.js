let currentResult = '';

function appendNumber(number) {
    currentResult += number;
    document.getElementById('result').value = currentResult;
}

function appendOperator(operator) {
    currentResult += ` ${operator} `
    document.getElementById('result').value = currentResult;
}

function calculate() {
    currentResult = eval(currentResult);
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = ''
}
