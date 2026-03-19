// Pegando os elementos do DOM
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const endereco = document.getElementById("endereco")
const form = document.getElementById("formCadastro")

// Evento de submit no formulário
form.addEventListener("submit", function(evento){
    evento.preventDefault() // Impede a página de recarregar

    fetch("url da API")
    .then(resposta => resposta.json())  // converte para JSON
    .then(dados => {
        console.log(dados) // usa os dados
    })

    console.log("Nome:", nome.value)
    console.log("Email:", email.value)
    console.log("CEP:", cep.value)
    console.log("ENDEREÇO:", endereco.value)
})