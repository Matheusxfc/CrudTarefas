const input = document.getElementById('tarefaInput');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const textoTarefa = input.value;

    if (textoTarefa === "") {
        alert("Digite algo antes de adicionar!");
        return;
    }

    const novaLinha = document.createElement('li');
    
    // Adicionamos classes e eventos no HTML gerado
    novaLinha.innerHTML = `
        <span onclick="alternarConcluida(this)" class="texto-tarefa">${textoTarefa}</span>
        <button class="btn-excluir" onclick="removerTarefa(this)">Excluir</button>
    `;

    lista.appendChild(novaLinha);
    input.value = "";
}

function removerTarefa(botao) {
    const itemParaRemover = botao.parentNode;
    lista.removeChild(itemParaRemover);
}

// --- UPDATE ---
// Esta função "liga" e "desliga" o risco no texto
function alternarConcluida(elementoSpan) {
    // O toggle verifica: se já tem a classe, ele tira. Se não tem, ele coloca.
    elementoSpan.classList.toggle('concluida');
}