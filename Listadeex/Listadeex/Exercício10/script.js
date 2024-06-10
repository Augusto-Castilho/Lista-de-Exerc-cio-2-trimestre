document.getElementById('calcularBtn').addEventListener('click', function() {
    let valorVendido = parseFloat(document.getElementById('valorVendido').value);
    let meta = parseFloat(document.getElementById('meta').value);
    let metaMinima = parseFloat(document.getElementById('metaMinima').value);

    let percentualMeta = (valorVendido / meta) * 100;
    let percentualMetaMinima = (valorVendido / metaMinima) * 100;

    let resultado = "";

    if (valorVendido >= meta) {
        resultado += "Meta atingida!";
    } else if (valorVendido >= metaMinima) {
        resultado += "Meta mínima atingida.";
    } else {
        resultado += "Nenhuma meta foi atingida.";
    }

    resultado += "<br>Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%";
    resultado += "<br>Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";

    document.getElementById('resultado').innerHTML = resultado;
});