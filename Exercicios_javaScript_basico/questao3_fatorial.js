document.querySelector("#btn").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const inputNumbers = document.getElementById("input_numbers");
  const numbers = inputNumbers.value
    .split(",")
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num.trim()));

  if (inputNumbers.value !== "") {
    let output = "";
    numbers.forEach((num) => {
      let fatorial = calculaFatorial(num);
      let primos = tresMenoresPrimosMaioresQue(num);
      output += `${num}: ${fatorial}, ${primos}\n`;
    });

    const p = document.createElement("p");
    p.innerText = output;

    resultElement.appendChild(p);

    inputNumbers.value = "";
  }
});

function calculaFatorial(num) {
  let fatorial = 1;
  for (let i = num; i > 0; i--) {
    fatorial *= i;
  }
  return fatorial;
}

function isPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function tresMenoresPrimosMaioresQue(num) {
  let primos = [];
  let i = num + 1;
  while (primos.length < 3) {
    if (isPrimo(i)) {
      primos.push(i);
    }
    i++;
  }
  return primos;
}
