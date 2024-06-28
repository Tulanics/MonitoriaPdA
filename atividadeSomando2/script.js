function soma() {
    var valor1 = parseFloat(
        prompt("insira o primeiro valor para soma")
        .replace(',', '.')
        );
    var valor2 = parseFloat(
        prompt("insira o segundo valor para a soma")
        .replace(',', '.')
        );

    resultado = (valor1 + valor2)

    return exibir(resultado)
}

function exibir(soma) {
    alert(soma);
}

window.onload = soma