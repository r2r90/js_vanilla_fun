const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    }else {
        appendValue(buttonValue)
    }
  });
}

function clearResult() {
    inputEl.value = ''
}
function calculateResult() {
    inputEl.value = eval(inputEl.value);
}
function appendValue(buttonValue) {
    inputEl.value += buttonValue
}
