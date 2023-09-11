import Cliente from "./Cliente.js";
// Função para exibir a saudação personalizada
function saudacaoPersonalizada() {
    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let dataNascimento = document.getElementById("dataNascimento").value;

    // Verifica se os campos estão preenchidos
    if ((nomeCompleto === "") || (dataNascimento === "")) {
        alert("Preencha todos os campos.");
        return;
    }

    // Cria um objeto to tipo Cliente
    let cliente = new Cliente(nomeCompleto, dataNascimento);

    // Chama o método calcularIdade da classe Cliente
    let idade = cliente.calcularIdade();

    // Obtém o primeiro nome
    let primeiroNome = cliente.getPrimeiroNome;

    // Exibe a saudação personalizada
    let mensagem = `Olá, ${primeiroNome}! Você tem ${idade} anos.`;
    document.getElementById("saida").textContent = mensagem;
}

// Evento de clique no botão "Calcular Idade"
document.getElementById("btnCalcularIdade").addEventListener("click", saudacaoPersonalizada);
