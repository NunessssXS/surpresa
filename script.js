function proximaPagina() {
    const nome = document.getElementById('nome').value;
    if (nome.trim() !== "") {
        // Exibe a próxima página com a mensagem "Você é especial!"
        document.getElementById('pagina1').style.display = 'none';
        document.getElementById('pagina2').style.display = 'block';
    } else {
        alert("Por favor, insira seu nome.");
    }
}

function mostrarOpcoes() {
    document.getElementById('pagina2').style.display = 'none';
    document.getElementById('pagina3').style.display = 'block';
}

function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem').value.toLowerCase();

    if (mensagem === "linda") {
        document.getElementById('mensagemTexto').textContent = "Você é linda! Sempre será!";
    } else if (mensagem === "maravilhosa") {
        document.getElementById('mensagemTexto').textContent = "Você é maravilhosa! Meu amor por você é infinito!";
    } else {
        document.getElementById('mensagemTexto').textContent = "Te amo muito! E sempre vou te amar!";
    }

    // Exibe a mensagem personalizada
    document.getElementById('pagina3').style.display = 'none';
    document.getElementById('mensagemPersonalizada').style.display = 'block';
}

function reiniciar() {
    document.getElementById('mensagemPersonalizada').style.display = 'none';
    document.getElementById('pagina1').style.display = 'block';
    document.getElementById('nome').value = ''; // Limpa o campo de nome
}

