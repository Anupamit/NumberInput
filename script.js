const numberInput = document.getElementById("number-input");
const output = document.getElementById("output");

numberInput.addEventListener("input", function() {
  const num = Number(numberInput.value);
  
  if (num < 0) {
    output.innerHTML = "Enter a positive value";
  } else if (num % 2 === 0) {
    output.innerHTML = `Next 3 even numbers: ${num + 2}, ${num + 4}, ${num + 6}`;
  } else {
    output.innerHTML = `Next 3 odd numbers: ${num + 2}, ${num + 4}, ${num + 6}`;
  }
});
