function mostrarMensagem() {
    var nome = document.getElementById('nome').value;
    if (nome.trim() !== "") {
        // Exibe a mensagem de boas-vindas
        document.getElementById('nomeApresentacao').textContent = nome;

        // Mostra o próximo formulário
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('mensagem').style.display = 'block';
        document.getElementById('opcoes').style.display = 'block';
    } else {
        alert("Por favor, insira seu nome.");
    }
}

function mostrarOpcao() {
    var opcaoSelecionada = document.getElementById('opcao').value;
    var mensagemPersonalizada = '';

    // Definindo a mensagem com base na opção escolhida
    if (opcaoSelecionada === 'linda') {
        mensagemPersonalizada = 'Você é realmente linda!';
    } else if (opcaoSelecionada === 'maravilhosa') {
        mensagemPersonalizada = 'Você é maravilhosa!';
    } else if (opcaoSelecionada === 'inteligente') {
        mensagemPersonalizada = 'Você é muito inteligente!';
    }

    document.getElementById('mensagemPersonalizada').textContent = mensagemPersonalizada;
}
