const alunos = [];
for (let index = 0; index < 3; index++) {
    const aluno = {
        id: null,
        nome: null,
        nota: []
    };
    aluno.id = Number(prompt("Informe o ID: "));
    aluno.nome = prompt("Informe o nome: ");
    for (let index2 = 0; index2 < 2; index2++) {
        aluno.nota.push(Number(prompt("Informe a nota " + (index2 + 1) + " do aluno " +
            aluno.nome + ": ")));
    }
    alunos.push(aluno);
}
console.log(alunos);
export {};
