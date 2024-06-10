document.getElementById('calcularBtn').addEventListener('click', function() {
    let numPessoas = parseInt(document.getElementById('numPessoas').value);

    if (isNaN(numPessoas) || numPessoas <= 0) {
        document.getElementById('resultado').innerHTML = "<p>Por favor, insira um número válido de pessoas.</p>";
        return;
    }

    let ovos = numPessoas * 2;
    let queijo = numPessoas * 50;

    document.getElementById('resultado').innerHTML = "<p>Para " + numPessoas + " pessoa(s), você precisará de:</p>" +
        "<p>" + ovos + " ovos</p>" +
        "<p>" + queijo + " gramas de queijo</p>";
    });