// Pegando os elementos do DOM
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const endereco = document.getElementById("endereco")
const form = document.getElementById("formCadastro")

// Evento quando digitar o CEP
cep.addEventListener("input", function(){
    const cepValor = cep.value.replace(/\D/g, "") // remove traço e ponto

    if(cepValor.length === 8){ // só busca quando tiver 8 dígitos
        fetch(`https://viacep.com.br/ws/${cepValor}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados)
                endereco.value = dados.logradouro + " - " + dados.localidade + "/" + dados.uf
            })
    }
})

// Evento de submit no formulário
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log("Nome:", nome.value)
    console.log("Email:", email.value)
    console.log("CEP:", cep.value)
    console.log("Endereço:", endereco.value)
})