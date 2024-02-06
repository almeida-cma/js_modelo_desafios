function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // verificar se os valores sao numeros
    if (isNaN(num1) || isNaN(num2)) {
        alert('Favor inserir numeros validos');
        return;
    }

    // calcular a soma

    var resultado = num1 + num2;

    // exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
