// Criar a classe
class Parquimetro {
    
constructor(valor){
    this.valor = valor
    this.tempo = 0
    this.troco = 0
    }
    
calcularTempo(){

    if(this.valor < 1){
    return "Valor insuficiente"
    }

    if(this.valor >= 1 && this.valor < 1.75){
    this.tempo = 30
    this.troco = this.valor - 1
    }
    
    if(this.valor >= 1.75 && this.valor < 3){
    this.tempo = 60
    this.troco = this.valor - 1.75
    }

    if(this.valor >= 3){
    this.tempo = 120
    this.troco = this.valor - 3
    }
  }
}

//Agora vamos pegar as referências dos elementos do HTML.

//Variável
const inputValor = document.getElementById("valor")

//Aqui foi acrescentado um comando para evitar que o usuário digite mais de 2 numeros após a virgula
inputValor.addEventListener("input", function(){

let valor = inputValor.value

if(valor.includes(".")){

let partes = valor.split(".")

partes[1] = partes[1].slice(0,2)

inputValor.value = partes[0] + "." + partes[1]

}

})

//Restante das variáveis
const botaoCalcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

//Evento 
botaoCalcular.addEventListener("click", function(){

const valor = Number(inputValor.value) // Pega oque o usuário digitou no input -> Number - Transforma texto em numero

const parquimetro = new Parquimetro(valor) // Objeto Criado

const erro = parquimetro.calcularTempo()

if(erro){
    resultado.innerText = erro
    return
}

parquimetro.calcularTempo()

resultado.innerText = "Tempo: " + parquimetro.tempo + " minutos | Troco: R$ " + parquimetro.troco.toFixed(2); 

})