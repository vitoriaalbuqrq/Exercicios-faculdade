document.querySelector("#btn").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const inputNumbers = document.getElementById("input_numbers");
  const numbers = inputNumbers.value
    .split(",")
    .map((num) => parseInt(num.trim()));

  if (inputNumbers.value !== "") {
    let sum = 0;
    let sumText = "";

    numbers.forEach((number) => {
      if (
        number % 2 !== 0 &&
        (number % 3 === 0 || number % 5 === 0 || number % 7 === 0)
      ) {
        sum += number;
        if (sumText !== "") {
          sumText += " + ";
        }
        sumText += number;
      }
    });

    const p = document.createElement("p");
    p.innerText = `Resultado: ${sumText} = ${sum}`;
    resultElement.appendChild(p);

    inputNumbers.value = "";
  }
});
