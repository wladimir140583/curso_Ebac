// Pegando os elementos do DOM
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const endereco = document.getElementById("endereco")
const form = document.getElementById("formCadastro")

// Restaurar dados salvos ao carregar a página
window.onload = function(){
    nome.value = localStorage.getItem("nome") || ""
    email.value = localStorage.getItem("email") || ""
    cep.value = localStorage.getItem("cep") || ""
    endereco.value = localStorage.getItem("endereco") || ""
}

// Evento quando digitar o CEP
cep.addEventListener("input", function(){
    const cepValor = cep.value.replace(/\D/g, "")

    if(cepValor.length === 8){
        fetch(`https://viacep.com.br/ws/${cepValor}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                endereco.value = dados.logradouro + " - " + dados.localidade + "/" + dados.uf
            })
    }
})

// Evento de submit no formulário
form.addEventListener("submit", function(evento){
    evento.preventDefault()

    // Salvar dados no localStorage
    localStorage.setItem("nome", nome.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("cep", cep.value)
    localStorage.setItem("endereco", endereco.value)

    alert("Cadastro salvo com sucesso!")
})