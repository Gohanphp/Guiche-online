let fila = [];
let numeroAtual = 0;
document.getElementById("gerarSenha").addEventListener("click", gerarSenha);
document.getElementById("senhaAtual").textContent = "Senha Atual: " + numeroAtual;

// numero atual sendo colocado em ultimo depois de ser chamado
fila.push ('A01');
let proxima = fila.shift();