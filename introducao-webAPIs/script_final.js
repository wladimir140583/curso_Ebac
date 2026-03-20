// Pegando os elementos do DOM
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const endereco = document.getElementById("endereco")
const form = document.getElementById("formCadastro")

// Pegando o botão de busca
const btnBuscarCep = document.getElementById("btnBuscarCep")

// Evento de clique no botão de busca
btnBuscarCep.addEventListener("click", function(){
    const cepValor = cep.value.replace(/\D/g, "")

    if(cepValor.length === 8){
        fetch(`https://viacep.com.br/ws/${cepValor}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                if(dados.erro){
                    alert("CEP não encontrado!")
                    return
                }
                endereco.value = dados.logradouro + " - " + dados.localidade + "/" + dados.uf
            })
    } else {
        alert("Digite um CEP válido com 8 dígitos!")
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

    // 3 Adiciona na lista
    cadastros.push(novoCadastro)

    // 4 Salva a lista atualizada
    localStorage.setItem("cadastros", JSON.stringify(cadastros))

    console.log("Lista de cadastros:", cadastros)

    // 5 Limpa os campos
            nome.value = ""
            email.value = ""
            cep.value = ""
            endereco.value = ""

    alert("Cadastro salvo com sucesso!")
})