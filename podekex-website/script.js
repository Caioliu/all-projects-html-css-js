function buscar() {
  var entrada = document.getElementById("entrada").value.toLowerCase();

  var url = "https://pokeapi.co/api/v2/pokemon/" + entrada + "";

  fetch(url)
  .then(response => response.json())
  .then(mostrarPokemon).catch(error => {
    var tela = document.getElementById("tela");
    tela.innerHTML = '<p> Pokémon não encontrado! </p>'
  });
}


function mostrarPokemon(dados) {
  var tela = document.getElementById("tela");

  tela.innerHTML =
      '<h2>' + dados.name + '</h2>'
      + '<img class="pokemon" src="' + dados.sprites.front_default + '">'
      + '<img class="pokemon" src="' + dados.sprites.back_default + '">'  
      + '<p> Id: ' + dados.id + '</p>'
      + '<p> Tipo: ' + dados.types.map(type => type.type.name) + '</p>'
      + '<p> Habilidades: ' + dados.abilities.map(ability => ability.ability.name)
    
}