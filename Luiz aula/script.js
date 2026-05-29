// Seleciona os elementos da página
const botao = document.getElementById('botao-clique');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', () => {
    // Alterna a classe para mostrar ou esconder a mensagem
    if (mensagem.classList.contains('escondido')) {
        mensagem.classList.remove('escondido');
        mensagem.classList.add('mostrado');
        botao.textContent = "Fechar mensagem";
    } else {
        mensagem.classList.remove('mostrado');
        mensagem.classList.add('escondido');
        botao.textContent = "Clique Aqui!";
    }
});