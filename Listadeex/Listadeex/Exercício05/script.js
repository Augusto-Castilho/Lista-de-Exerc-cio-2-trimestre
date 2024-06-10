document.getElementById('calcularBtn').addEventListener('click', function() {
    let nome1 = document.getElementById('nome1').value;
    let ano1 = parseInt(document.getElementById('ano1').value);

    let nome2 = document.getElementById('nome2').value;
    let ano2 = parseInt(document.getElementById('ano2').value);

    let nome3 = document.getElementById('nome3').value;
    let ano3 = parseInt(document.getElementById('ano3').value);

    let anoAtual = new Date().getFullYear();

    let idade1 = anoAtual - ano1;
    let idade2 = anoAtual - ano2;
    let idade3 = anoAtual - ano3;

    let maisVelha, segundaMaisVelha, maisNova;

    // Verificar a pessoa mais velha
    if (idade1 > idade2 && idade1 > idade3) {
        maisVelha = nome1 + " - " + idade1 + " anos";
        if (idade2 > idade3) {
            segundaMaisVelha = nome2 + " - " + idade2 + " anos";
            maisNova = nome3 + " - " + idade3 + " anos";
        } else {
            segundaMaisVelha = nome3 + " - " + idade3 + " anos";
            maisNova = nome2 + " - " + idade2 + " anos";
        }
    } else if (idade2 > idade1 && idade2 > idade3) {
        maisVelha = nome2 + " - " + idade2 + " anos";
        if (idade1 > idade3) {
            segundaMaisVelha = nome1 + " - " + idade1 + " anos";
            maisNova = nome3 + " - " + idade3 + " anos";
        } else {
            segundaMaisVelha = nome3 + " - " + idade3 + " anos";
            maisNova = nome1 + " - " + idade1 + " anos";
        }
    } else {
        maisVelha = nome3 + " - " + idade3 + " anos";
        if (idade1 > idade2) {
            segundaMaisVelha = nome1 + " - " + idade1 + " anos";
            maisNova = nome2 + " - " + idade2 + " anos";
        } else {
            segundaMaisVelha = nome2 + " - " + idade2 + " anos";
            maisNova = nome1 + " - " + idade1 + " anos";
        }
    }

    document.getElementById('resultado').innerHTML = "<p>Pessoa mais velha: " + maisVelha + "</p>" +
        "<p>Segunda pessoa mais velha: " + segundaMaisVelha + "</p>" +
        "<p>Pessoa mais nova: " + maisNova + "</p>";
});