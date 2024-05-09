const list = document.querySelector(".sorted_list")

document.querySelector("#btn_order").addEventListener("click", () => {
  const inputList = document.getElementById("input_list");
  const inputValue = inputList.value.trim();
  
  if (inputValue !== "") {
    let sortedList = inputValue.split(",").map(item => item.trim()).filter(item => item !== "").sort();
    const p = document.createElement("p");
    p.textContent = sortedList.join(", ");
    list.innerHTML = "";
    list.appendChild(p);
    inputList.value = "";

  }
});
