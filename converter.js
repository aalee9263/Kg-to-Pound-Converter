let kilogram = document.getElementById("kilogram");
let pound = document.getElementById("pound");

function kgToPd() {
  let output = (parseFloat(kilogram.value) * 2.20462);
  pound.value = parseFloat(output.toFixed(4));
}
function pdToKg() {
  let output = (parseFloat(pound.value) / 0.453592);
  kilogram.value = parseFloat(output.toFixed(2));
}
