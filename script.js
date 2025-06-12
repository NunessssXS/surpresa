document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('challenge').classList.remove('hidden');
});

document.getElementById('submitAnswer').addEventListener('click', function() {
  var answer = document.getElementById('answer').value;
  if (answer) {
    document.getElementById('challenge').classList.add('hidden');
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('surpriseText').textContent = `A sua resposta: "${answer}" me faz pensar em todos os momentos incríveis que já passamos juntos. Mal posso esperar para criar mais memórias com você!`;
  } else {
    alert('Por favor, insira uma resposta!');
  }
});
