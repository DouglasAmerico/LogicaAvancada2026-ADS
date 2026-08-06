const verificaNaoVazio = (valor:string|null):boolean => (valor!="")? true:false;

const verificaNaoNull = (valor:string|null):boolean => (valor!=null)? true:false;

const verificaSeNumero = (valor:string|null):boolean => (!isNaN(Number(valor)))? true:false;

const validaValoresNumericos = (valor:string|null):number => {
    do {
        valor = prompt("Informe o valor: ");
        if(!(verificaNaoVazio(valor) && verificaNaoNull(valor) && verificaSeNumero(valor))){
            alert("Informe somente valores numericos");
        }
    } while (!(verificaNaoVazio(valor) && verificaNaoNull(valor) && verificaSeNumero(valor)));

    return Number(valor);
}

let numero1:number , numero2:number;

numero1 = validaValoresNumericos(prompt("Informe o valor "));
numero2 = validaValoresNumericos(prompt("Informe o valor "));

alert("A soma "+(numero1+numero2));