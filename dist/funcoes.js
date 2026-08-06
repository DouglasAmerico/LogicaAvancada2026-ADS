"use strict";
const verificaNaoVazio = (valor) => (valor != "") ? true : false;
const verificaNaoNull = (valor) => (valor != null) ? true : false;
const verificaSeNumero = (valor) => (!isNaN(Number(valor))) ? true : false;
const validaValoresNumericos = (valor) => {
    do {
        valor = prompt("Informe o valor: ");
        if (!(verificaNaoVazio(valor) && verificaNaoNull(valor) && verificaSeNumero(valor))) {
            alert("Informe somente valores numericos");
        }
    } while (!(verificaNaoVazio(valor) && verificaNaoNull(valor) && verificaSeNumero(valor)));
    return Number(valor);
};
let numero1, numero2;
numero1 = validaValoresNumericos(prompt("Informe o valor "));
numero2 = validaValoresNumericos(prompt("Informe o valor "));
alert("A soma " + (numero1 + numero2));
