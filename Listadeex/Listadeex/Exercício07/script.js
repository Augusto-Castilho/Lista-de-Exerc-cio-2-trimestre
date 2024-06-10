document.getElementById('verificarBtn').addEventListener('click', function() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if (numero1 > numero2) {
        document.getElementById('resultado').innerText = "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
        document.getElementById('resultado').innerText = "O primeiro número é menor que o segundo.";
    } else {
        document.getElementById('resultado').innerText = "Os números são iguais.";
    }
});