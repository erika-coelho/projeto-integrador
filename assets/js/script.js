const acao = [{
    icone:"✔",texto:"Monitoramento de máquinas em tempo real;"},
    {icone:"✔",texto:"Backup automático de documentos e sistemas;"},
    {icone:"✔",texto: "Redução do uso de servidores físicos;"},
    {icone:"✔",texto:"Manutenção preventiva baseada em dados."},

]

const container = document.querySelector("#container-acoes")

for(let i=0; i<acao.length;i++){
const item = acao[i]
const div = document.createElement("div")
div.className = "acao-item"
div.innerHTML = `
 <div class="acao-icone">${item.icone}</div>
 <p class = "acao-texto">${item.texto}</p>`
 container.appendChild(div)
}

const nav = document.querySelector(".menu-navegacao")
window.addEventListener("scroll",()=>{
    if(window.scrollY>10){
        nav.style.opacity = 0.8
    } else{
        nav.style.opacity = 1
    }
})
    



const nomeCliente = document.querySelector("#nome")
const email = document.getElementById("email")
const btnInput = document.querySelector(".btninput")
const mensagem = document.querySelector(".msg")
const form = document.querySelector("#formulario-adesao")



function adesao(event) {
    event.preventDefault()

    const nomeUsuario = nomeCliente.value

    const acessoEmail = email.value

   
    if (nomeUsuario === "") {
        mensagem.textContent = "Informe seu nome completo"
    mensagem.style.fontSize="18px"}

  else if (!acessoEmail.includes("@")) {
    mensagem.style.fontSize="18px"
    mensagem.textContent = "Informe um e-mail válido";
}
    

    else {
        
        mensagem.textContent = " Adesão realizada com sucesso! 💙"
        mensagem.style.color = "green"
        mensagem.style.fontSize="18px"
        

        form.reset()
    }
}

btnInput.addEventListener("click", adesao)




    







