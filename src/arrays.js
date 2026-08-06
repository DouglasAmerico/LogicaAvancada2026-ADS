let nomes : string[]|null[] = [];

for (let index = 0; index < 3; index++) {
    nomes[index] = (prompt("Informe o nome "+(index+1)+": "));
}

console.log(nomes);