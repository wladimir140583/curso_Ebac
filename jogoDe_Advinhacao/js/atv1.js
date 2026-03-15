const inputPalpite = document.getElementById("palpite");
const botao = document.getElementById("botaoChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");
const resultado = document.getElementById("resultado");
const botaoReiniciar = document.getElementById("reiniciar");

/* Testes de saida ->
mensagem.textContent = "Teste mensagem";
resultado.textContent = "Teste resultado";
tentativas.textContent = "Teste tentativas";
*/

let numeroSecreto = Math.floor(Math.random() * 100) +1;
// let numeroSecreto = 50; -> Usado para teste
const tentativasMaximas = 5;
let tentativasRestantes = tentativasMaximas;

// Teste de saida
//tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

/*
botao.addEventListener("click", function() {

    const palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite)) {
    alert("Você usou uma tentativa.");
    mensagem.textContent = "Digite um número válido.";
    
    return;
  }

});
*/


botao.addEventListener("click", function () {

  const palpite = parseInt(inputPalpite.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    if (inputPalpite.value === "") {
      mensagem.textContent = "Campo vazio.";
    } 
    else {
      mensagem.textContent = "Digite apenas números validos de (1 a 100).";
    }
    return;

  }

  //  Palpite válido a partir daqui
  tentativasRestantes--;
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (tentativasRestantes === 0) {
  mensagem.textContent = "Suas tentativas acabaram!";
  resultado.textContent = `O número secreto era ${numeroSecreto}.`;
  botao.disabled = true;
  botaoReiniciar.disabled = false;

  return;
}

 /*  Palpite válido a partir daqui

  tentativasRestantes--;
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    ##  Antes esta parte do bloco estava aqui porem o codigo estava contando o zero 
como tentativa, ou seja, ao invés de 3 estava contando 4 tentativas ex 3, 2, 1, 0, = 4 tentativas... ##
  */

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Parabéns! Você acertou e ganhou 1.000.000,00!..";
    resultado.textContent = `O número secreto era ${numeroSecreto}.`;
    botao.disabled = true;
    botaoReiniciar.disabled = false;

    return;
  }

  if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é MAIOR.";
  } else {
    mensagem.textContent = "O número secreto é MENOR.";
  }

});

botaoReiniciar.addEventListener("click", function () {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = tentativasMaximas;

  mensagem.textContent = "Novo jogo iniciado!";
  resultado.textContent = "";
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  inputPalpite.value = "";
  botao.disabled = false;
  botaoReiniciar.disabled = true;
});
