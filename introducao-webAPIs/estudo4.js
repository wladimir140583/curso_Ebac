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

    // 1️⃣ Pega a lista atual ou cria uma vazia
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []

    // 2️⃣ Cria o novo cadastro
    const novoCadastro = {
        nome: nome.value,
        email: email.value,
        cep: cep.value,
        endereco: endereco.value
    }

    // 3️⃣ Adiciona na lista
    cadastros.push(novoCadastro)

    // 4️⃣ Salva a lista atualizada
    localStorage.setItem("cadastros", JSON.stringify(cadastros))

    console.log("Lista de cadastros:", cadastros)
    alert("Cadastro salvo com sucesso!")
})