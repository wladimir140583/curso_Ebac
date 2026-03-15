 // Primeiro definiu a classe - o molde do Objeto
class Parquimetro {
    // O constructor é executado automaticamente quando usamos "new".
    //Ele serve para inicializar o objeto.
    //Nesse caso - valor recebido → armazenado em this.valor
constructor(valor){
    this.valor = valor
    this.tempo = 0
    this.troco = 0
    }
//Depois criou um método:
/*  -- Métodos são funções que pertencem ao objeto.
Eles operam sobre os dados do objeto usando "this".  -  */
//   calcularTempo(){
//   console.log("Valor recebido:", this.valor); //Aqui: this.valor → atributo do objeto
    
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


  //  console.log("Tempo:", tempo, "minutos")
   // console.log("Troco:", troco)


  }
}

//Primeiro vamos pegar referências dos elementos do HTML.
//Variáveis
//Observe que essa entrada de valor tem alguns alementos a mais.
//essas linhas de código a mais impedem que o usuário digite numeros a mais apos a virgula ex: 3.25487 = 3.25
const inputValor = document.getElementById("valor")

/* -- Criar um evento de digitação
Aqui usamos addEventListener, que registra um evento do navegador.
Evento usado:
input */
inputValor.addEventListener("input", function(){
    /* Esse evento dispara toda vez que o usuário altera o campo:
digitando, apagando ou colando texto  */

//Pegar o valor digitado
let valor = inputValor.value // .value é a propriedade que contém o texto dentro do input

//Verifica se existe ponto decimal
if(valor.includes(".")){ //Aqui usamos o método includes() de string do JavaScript.
//verifica se um texto contém outro.

//Separar inteiro e decimal
let partes = valor.split(".") // split() divide uma string em partes

//Cortar apenas 2 casas decimais
partes[1] = partes[1].slice(0,2)
//Aqui usamos o método slice().
//Ele recorta um pedaço da string.

//Montar o número novamente
inputValor.value = partes[0] + "." + partes[1] //Agora reconstruímos o valor

}

})
const botaoCalcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

// Para teste do Botão:
//    botaoCalcular.addEventListener("click", function(){
//    console.log("Botão clicado")
//})

//Funcionamento Real
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

console.log(parquimetro)
// Para ver o resultado no console
// console.log("Valor digitado:", valor) 

})


/*


//Criação do objeto (instância) - Depois criou a instância:
// Aqui acontece:
        const teste = new Parquimetro(5)
/*
new Parquimetro(2)
↓
cria objeto na memória
↓
executa constructor
↓
retorna referência

Resultado:
teste ───► { valor: 2 }
*/

//Execução do método
//Depois você chamou o método:
/* teste.calcularTempo()


/*Aqui o JavaScript faz:
this → aponta para teste

Então o método acessa:
this.valor = 2

Resultado no console:
Valor recebido: 2 --- */

//Acessar propriedades do objeto (teste, teste.valor, teste.tempo, teste.troco)


/*
console.log(teste)
console.log("Valor inserido",teste.valor,)
console.log("Tempo",teste.tempo,)
console.log("Troco",teste.troco,)

console.log(inputValor)
console.log(botaoCalcular)
console.log(resultado)

*/