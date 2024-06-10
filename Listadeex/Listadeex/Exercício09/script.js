document.getElementById('calcularBtn').addEventListener('click', function() {
    let numAlunos = parseInt(document.getElementById('numAlunos').value);
    let numTurmas = parseInt(document.getElementById('numTurmas').value);

    if (numAlunos <= 0 || numTurmas <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira números válidos.";
        return;
    }

    let pessoasPorTurma = Math.floor(numAlunos / numTurmas);
    let pessoasSemTurma = numAlunos % numTurmas;

    document.getElementById('resultado').innerText = "Pessoas por turma: " + pessoasPorTurma + "\n" +
        "Pessoas sem turma: " + pessoasSemTurma;
});