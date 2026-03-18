function calcularIMC() {

    // Criar as variáveis e capturar os valores
    let peso = document.getElementById("peso").value; 
    let altura = document.getElementById("altura").value;

    // Processamento
    let imc = peso / (altura * altura);

    // Classificação do IMC
    let classificacao = "";
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }
    
     
    // Saida
    document.getElementById("imc").textContent = "valor do IMC é: " + imc.toFixed(2);
    document.getElementById("outClassificacaoIMC").textContent = "Classificação: " + classificacao;
}

    document.getElementById("btCalcular").addEventListener('click', calcularIMC);