document.getElementById('verificarBtn').addEventListener('click', function() {
    let numero = parseInt(document.getElementById('numero').value);

    if (numero % 2 === 0) {
        document.getElementById('resultado').innerText = "O número é Par.";
    } else {
        document.getElementById('resultado').innerText = "O número é Ímpar.";
    }
});