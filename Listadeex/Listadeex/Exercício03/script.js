document.getElementById('calcularBtn').addEventListener('click', function() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerHTML = "<p>Por favor, insira números válidos.</p>";
        return;
    }

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    document.getElementById('resultado').innerHTML = "<p>Soma: " + soma + "</p>" +
        "<p>Subtração: " + subtracao + "</p>" +
        "<p>Multiplicação: " + multiplicacao + "</p>" +
        "<p>Divisão: " + divisao + "</p>";
});