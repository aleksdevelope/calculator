const plusId = document.getElementById("plus");
const minusId = document.getElementById("minus");
const multiplyId = document.getElementById("multiply");
const divideId = document.getElementById("divide");
const dotId = document.getElementById("dot");
const clearId = document.getElementById("clear");
const backspaceId = document.getElementById("backspace");
const equalId = document.getElementById("equal");

equalId.onclick = equal;
backspaceId.onclick = deleteLastSign;
clearId.onclick = clearResult;
plusId.onclick = function () {
    showMathSigns("+");
}
minusId.onclick = function () {
    showMathSigns("-");
};
multiplyId.onclick = function () {
    showMathSigns("*");
};
divideId.onclick = function () {
    showMathSigns("/");
};
dotId.onclick = function () {
    showMathSigns(".");
};

const numbers = [];
const resultId = document.getElementById("result");

let result = 0;

function showMathSigns(mathSign) {
    if (mathSign != "-") {
        if (resultId.value != "") {
            if (resultId.value[resultId.value.length - 1] != "+" && resultId.value[resultId.value.length - 1] != "-" && resultId.value[resultId.value.length - 1] != "*" && resultId.value[resultId.value.length - 1] != "/" && resultId.value[resultId.value.length - 1] != ".") {
                resultId.value = resultId.value + mathSign;
            }
        }
    } else {
        if (resultId.value[resultId.value.length - 1] != "+" && resultId.value[resultId.value.length - 1] != "-" && resultId.value[resultId.value.length - 1] != "*" && resultId.value[resultId.value.length - 1] != "/" && resultId.value[resultId.value.length - 1] != ".") {
            resultId.value = resultId.value + mathSign;
        }
    }
}

function getNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers.push(document.getElementById("number" + i));
    }
}

getNumbers();

function makeListenersForNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers[i].onclick = function () {
            showNumbers(i);
        }
    }
}

makeListenersForNumbers();

function showNumbers(currentNumber) {
    resultId.value = resultId.value + currentNumber;
}
function clearResult() {
    resultId.value = "";
}
function deleteLastSign() {
    resultId.value = resultId.value.slice(0, -1);
}
function equal() {
    resultId.value = eval(resultId.value);
}
