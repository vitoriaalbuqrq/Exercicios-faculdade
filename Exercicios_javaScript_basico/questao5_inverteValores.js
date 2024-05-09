document.querySelector("#btn").addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  const inputNumbers = document.getElementById("input_numbers");
  const numbers = inputNumbers.value
    .split(",")
    .filter((num) => num.trim() !== "")
    .map((num) => parseInt(num.trim()));

  if (inputNumbers.value !== "") {
    let invertedList = [];
    for (let i=numbers.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        invertedList.push(Math.pow(numbers[i], 2));
      }else{
        invertedList.push(numbers[i]);
      }
    }
    const p = document.createElement("p");
    p.innerText = invertedList;

    resultElement.appendChild(p);
  }
});
