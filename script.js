const inputDiego = document.querySelector("#diego");
const inputTiempo = document.querySelector("#tiempo");
const labels = document.querySelectorAll("#label");

const makeConversion = (diego) => {
  if (diego === "") return "";
  if (isNaN(parseInt(diego))) return "Unidad incorrecta";
  if (diego === null) return "";
  if (diego >= 30) return "Mejor ni lo esperen";
  if (diego <= 30) return diego * 4 + " minutos";
};

inputDiego.addEventListener("keyup", (event) => {
  inputTiempo.value = makeConversion(inputDiego.value);
  if (inputDiego.value === "") {
    labels[0].style.display = "none";
  } else {
    labels[0].style.display = "block";
  }
  if (inputTiempo.value === "") {
    labels[1].style.display = "none";
  } else {
    labels[1].style.display = "block";
  }
});
