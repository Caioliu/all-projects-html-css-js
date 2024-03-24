function compararMoedas() {
  let primeiraMoeda = document.getElementById('moeda1').value.toUpperCase();
  let segundaMoeda = document.getElementById('moeda2').value.toUpperCase();
  let quantidade = document.getElementById('amount').value;
  
  var regex = /\d/;

  if (regex.test(primeiraMoeda)) {
    alert('Nome da moeda 1 inválido.');
    return
  }
  if (regex.test(segundaMoeda)) {
    alert('Nome da moeda 2 inválido.');
    return
  }

  let url = `https://v6.exchangerate-api.com/v6/b1df75bc187db0c9e77a4d5c/pair/${primeiraMoeda}/${segundaMoeda}/${quantidade}`;

  fetch(url)
  .then(response => response.json())
  .then(mostrarConversao).catch(error => {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<p> Moeda 1 ou 2 inválidas! </p>'
  });
  
}

function mostrarConversao(dados) {
  let primeiraMoeda = document.getElementById('moeda1').value.toUpperCase();
  let segundaMoeda = document.getElementById('moeda2').value.toUpperCase();
  let quantidade = document.getElementById('amount').value;
  
  let resultado = document.getElementById('resultado');
  
  resultado.innerHTML = `A conversão de ${quantidade} ${primeiraMoeda} para ${segundaMoeda} é de ${dados.conversion_result.toFixed(2)} ${segundaMoeda}`
  
}