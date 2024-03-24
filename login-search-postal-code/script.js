function fazerLogin() {
  var login = document.getElementById('txtLogin').value;
  var senha = document.getElementById('txtSenha').value;

  if (login == "admin" && senha == "admin") {
    alert('Login realizado com sucesso.')
    window.location.href = 'cep.html';
  }
  else {
    alert('Login e/ou senha incorretos.');
  }
}

function consultarCep() {
  let cep = document.getElementById('cep').value;

  if (cep.length != 8) {
    alert("Cep inválido.");
    return
  }

  let url = "https://viacep.com.br/ws/" + cep + "/json/";
  fetch(url).then(
    function(response) {
      response.json().then(mostrarEndereco);
    }
  );

}

function mostrarEndereco(dados) {
  let resultado = document.getElementById('resultado');

  if (dados.erro) {
    resultado.innerHTML = "Não foi possível localizar o cep.";
  }
  else {
    resultado.innerHTML = "<p>Rua: " + dados.logradouro + "</p>" + "<p>Bairro: " + dados.bairro + "</p>" + "<p>Cidade: " + dados.localidade + "</p>" + "<p>Estado: " + dados.uf + "</p>";
  }
}
