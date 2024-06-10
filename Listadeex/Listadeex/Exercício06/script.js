document.getElementById('verificarBtn').addEventListener('click', function() {
    let notaFinal = parseFloat(document.getElementById('notaFinal').value);

    if (notaFinal >= 6) {
        document.getElementById('resultado').innerHTML = "<p>Aprovado</p>";
    } else if (notaFinal > 4) {
        document.getElementById('resultado').innerHTML = "<p>Precisa fazer prova substitutiva</p>";
    } else {
        document.getElementById('resultado').innerHTML = "<p>Reprovado</p>";
    }
});