(function() {
    let currentInput = '';
    let operation = null;
    let previousInput = '';

    function appendNumber(number) {
        currentInput += number;
        display();
    }

    function setOperation(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operation = op;
        previousInput = currentInput;
        currentInput = '';
    }
}
)