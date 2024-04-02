function valor() {
    const valor = document.getElementById('valor');
    const dolar = valor.value
    const calculo = dolar * 5.04;
    document.getElementById('resultado').textContent = calculo.toFixed(2);
};

valor();