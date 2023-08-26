// common random background color  //
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
const cards = document.querySelectorAll(".cards-item");
const card = cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const random = randColor();
    this.style.backgroundColor = `${random}55`;
  });
  card.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "white";
  });
});

// ......closing Error popup ......//
const empty = document.querySelector(".empty-error");
empty.addEventListener("click", function () {
  this.style.display = "none";
});

// ....... get inputValue by id.......//
function getInputValueById(inputId) {
  const input = document.getElementById(inputId);
  const inputStr = parseFloat(input.value);
  if (
    isNaN(input.value) ||
    input.value < 1 ||
    input.value === "" ||
    input.value === null ||
    input.value === undefined
  ) {
    empty.style.display = "inline-block";
    return;
  } else {
    input.value = "";
    return inputStr;
  }
}
// ........Create element and Display output.....//
function displayOutput(calculation, name) {
  const parent = document.querySelector(".result-container");
  const list = document.createElement(`li`);
  list.innerHTML = `
  <div style="display:flex; align-items:center;margin-bottom:10px"><li id="innerDiv"><span style="color:teal;">${name}</span> Area : ${calculation}</li> <span>cm</span><sup>2 </sup> <button style="border: none;color:white;background-color:blue;border-radius:3px;margin-left:10px; padding:5px 15px;"id="trButton">Converte</button> <button id="remove"  style="margin-left:20px;color:red;font-size:30px border:none"><i class="fa-solid fa-xmark"></i></button></div>
  `;
  //.........cm output Delete........//
  const h1Element = list.querySelector("#innerDiv");
  h1Element.style.display = "inline-block";
  if (isNaN === calculation) {
  } else if (calculation > 1) {
    parent.appendChild(list);
  }

  const remove = list.querySelector("#remove");
  remove.addEventListener("click", function (e) {
    this.parentNode.remove(this.parentNode);
  });
}
