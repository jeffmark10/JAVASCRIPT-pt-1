let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach((tarefa, indice) => {
      novaLista = novaLista + `
        <li class="item-tarefa ${tarefa.concluida ? 'concluido' : ''}">
            <p class="nome-tarefa">${tarefa.nome}</p>
            <button type="button" class="botao-concluir" data-index="${indice}">
              ${tarefa.concluida ? '✔' : '◻'}
            </button>
            <button type="button" class="botao-delete" data-delete="${indice}">✖</button>
        </li>`
    })

    listaCompleta.innerHTML = novaLista
}

function cliqueiNoBotao(){
    const valor = input.value.trim()
    if (!valor) return

    arrayDeTarefas.push({ nome: valor, concluida: false })
    input.value = ""
    mostrarNaTela()    
}

listaCompleta.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botao-concluir")) {
        const indice = Number(evento.target.dataset.index)
        arrayDeTarefas[indice].concluida = !arrayDeTarefas[indice].concluida
        mostrarNaTela()
        return
    }

    if (evento.target.classList.contains("botao-delete")) {
        const indice = Number(evento.target.dataset.delete)
        arrayDeTarefas.splice(indice, 1)
        mostrarNaTela()
    }
})

botao.addEventListener("click", cliqueiNoBotao)