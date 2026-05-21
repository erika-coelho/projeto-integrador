const listaacoes= document.querySelector(".lista-acoes")
const listaUl =document.createElement("ul")


const nomeCliente = document.querySelector("#nome")
const email = document.getElementById("email")
const btnInput = document.querySelector(".btninput")
const mensagem = document.querySelector(".msg")


    
function adesao(event) {
    event.preventDefault()

    const nomeUsuario = nomeCliente.value

    const acessoEmail = email.value

   
    if (nomeUsuario === "") {
        mensagem.textContent = "Informe seu nome completo"
    }

    else if (acessoEmail === "") {
        mensagem.textContent = "Informe seu e-mail"
    }

    

    else {
        
        mensagem.textContent = "Cadastro realizado com sucesso!"
        mensagem.style.color = "green"
    }
}

btnInput.addEventListener("click", adesao)






listaacoes.appendChild(listaUl)


const acoes = ["✓Monitoramento de máquinas em tempo real;", "✓Backup automático de documentos e sistemas;","✓ Redução do uso de servidores físicos;" , "✓Manutenção preventiva baseada em dados."]


acoes.forEach((acoesindustria) => {

    const listaLi = document.createElement("li")

    listaUl.appendChild(listaLi)

    listaLi.textContent = acoesindustria
})

console.log("erika")