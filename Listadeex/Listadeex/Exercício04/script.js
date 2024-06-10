document.getElementById('calcularBtn').addEventListener('click', function() {
    let sabor1 = document.getElementById('sabor1').value;
    let sabor2 = document.getElementById('sabor2').value;
    let sabor3 = document.getElementById('sabor3').value;
    let sabor4 = document.getElementById('sabor4').value;
    let quantidadeRefrigerantes = parseInt(document.getElementById('quantidadeRefrigerantes').value);

    if (quantidadeRefrigerantes < 0) {
        document.getElementById('resultado').innerHTML = "<p>Por favor, insira uma quantidade válida de refrigerantes.</p>";
        return;
    }

    let precoPizza = 12; // R$12 por sabor
    let precoRefrigerante = 7; // R$7 por refrigerante

    let totalPizzas = 4;
    let totalPagarPizzas = totalPizzas * precoPizza;
    let totalPagarRefrigerantes = quantidadeRefrigerantes * precoRefrigerante;
    let totalPagar = totalPagarPizzas + totalPagarRefrigerantes;

    document.getElementById('resultado').innerHTML = "<p>Sabores de pizza escolhidos:</p>" +
        "<ul>" +
        "<li>" + sabor1 + "</li>" +
        "<li>" + sabor2 + "</li>" +
        "<li>" + sabor3 + "</li>" +
        "<li>" + sabor4 + "</li>" +
        "</ul>" +
        "<p>Total a pagar: R$" + totalPagar.toFixed(2) + "</p>";
});