function buscar() {
  alert("É assim que coisas grandes começam.");
  var pesquisa = document.querySelector("input").value;
  var url = "https://www.google.com/search?q=" + pesquisa;
  window.open(url, "_blank");
}