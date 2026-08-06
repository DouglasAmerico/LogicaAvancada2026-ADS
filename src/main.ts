const n1 : string|null = prompt("Informe o numero: ");
const n2 : string|null = prompt("Informe o numero: ");
let n3 :number= 0 , n4 :number= 0 ;

if(n1 != "" && n2 != ""){
    n3=Number(n1);
    n4=Number(n2);
    if(!isNaN(n3) && !isNaN(n4)){
        console.log("n1 -> "+n3);
        console.log("n2 -> "+n4);
    }else{
        console.log("Não eram numeros");
    }
}else{
    console.log("Somente valores numericos");
}

