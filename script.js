document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! Número B é maior que o número A.';
        mensagem.style.backgroundColor = 'green';
        mensagem.style.color = 'white';
        mensagem.style.fontSize = '20px';
    } else {
        mensagem.textContent = 'Formulário inválido! Número B deve ser maior que o número A.';
        mensagem.style.backgroundColor = 'red';
        mensagem.style.color = 'white';
        mensagem.style.fontSize = '20px';
    }
});
