// ......Calculate Triangle and show output on ui..........//
function calculateTriangle(button) {
  let name = "Triangle";
  const baseValue = getInputValueById("triangleBase");
  const heightValue = getInputValueById("triangleHeight");
  const calculation = 0.5 * baseValue * heightValue;
  // ........display output ........//
  displayOutput(calculation, name);
}

// ....... Calculate Rectangle ........  //
function calculateRectangle() {
  let name = "Rectangle";
  const baseValue = getInputValueById("rectangleBase");
  const heightValue = getInputValueById("rectangleHeight");
  const calculation = baseValue * heightValue;
  // ........display output ........//
  displayOutput(calculation, name);
}
// ....... Calculate Parallelogram ........  //
function calculateParallelogram() {
  let name = "Parallelogram";
  const baseValue = getInputValueById("parallelogramBase");
  const heightValue = getInputValueById("parallelogramHeight");
  const calculation = baseValue * heightValue;
  // ........display output ........//
  displayOutput(calculation, name);
}
// ....... Calculate Ellipse ........  //
function calculateEllipse() {
  let name = "Ellipse";
  const baseValue = getInputValueById("ellipseBase");
  const heightValue = getInputValueById("ellipseHeight");
  const calculation = 3.1416 * (baseValue * heightValue);
  // ........display output ........//
  displayOutput(calculation, name);
}
// ....... Calculate Pentagon ........  //
function calculatePentagon() {
  let name = "Pentagon";
  const length = getInputValueById("pentagonHeight");
  const calculation = parseFloat(
    (5 * `${length}` ** 2) / (4 * Math.tan(Math.PI / 5))
  ).toFixed(2);
  // ........display output ........//
  displayOutput(calculation, name);
}

// ....... Calculate Rhombus ........  //
function calculateRhombus() {
  let name = "Rhombus";
  const baseValue = getInputValueById("rhombusBase");
  const heightValue = getInputValueById("rhombusHeight");
  const calculation = baseValue * heightValue;
  // ........display output ........//
  displayOutput(calculation, name);
}
