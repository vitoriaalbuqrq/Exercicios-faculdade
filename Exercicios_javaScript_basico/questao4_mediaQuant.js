document.querySelector("#btn").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const inputNumbers = document.getElementById("input_numbers");
  const numbers = inputNumbers.value
    .split(",")
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num.trim()));

  if (inputNumbers.value !== "") {
    let soma = 0;
    let totalPositivos = 0;
    let totalNegativos = 0;
    numbers.forEach((num) => {
      soma += num;
      num < 0 ? (totalNegativos += 1) : (totalPositivos += 1);
    });
    let media = soma / numbers.length;
    let percentualPositivos = (totalPositivos / numbers.length) * 100;
    let percentualNegativos = (totalNegativos / numbers.length) * 100;

    const p = document.createElement("p");
    p.innerText = `Média Aritmética: ${media.toFixed(1)}
                   Qnt positivos: ${totalPositivos}
                   Qnt negativos: ${totalNegativos}
                   Percentual positivos: ${percentualPositivos}%
                   Percentual negativos: ${percentualNegativos}%`;

    resultElement.appendChild(p);
  }
});
