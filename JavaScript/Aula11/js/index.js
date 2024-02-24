let numeros = [1,456,2,25,3,100,5,10,50,123,789,4];
let nomes = ['Nicolas', 'Bruno', 'Fernando', 'Isabelle', 'Mota', 'Felipe', 'Marjorie', 'Junior'];
let alunos = [
    {
        nome: 'Nicolas',
        genero: 'Masculino',
        idade: 19
    },
    {
        nome: 'Bruno',
        genero: 'Masculino',
        idade: 32
    },
    {
        nome: 'Felipe',
        genero: 'Masculino',
        idade: 26
    },
    {
        nome: 'Isabelle',
        genero: 'Feminino',
        idade: 24
    },
    {
        nome: 'Marjorie',
        genero: 'Feminino',
        idade: 29
    },
    {
        nome: 'Mota',
        genero: 'Masculino',
        idade: 26
    },
    {
        nome: 'Junior',
        genero: 'Masculino',
        idade: 20
    },
];

let numerosMenoresQue50 = numeros.filter(numero => numero < 50);
document.writeln("Números menores que 50:", numerosMenoresQue50);

function maiores(num){
    return num > 50;
}

let numerosMaioresQue50 = numeros.filter(maiores);
document.writeln("Números maiores que 50:", numerosMaioresQue50);

let numerosOrdenados = numeros.sort((a, b) => a - b);
document.writeln("Números ordenados:", numerosOrdenados);

// Números divisíveis por 3
let divisiveisPor3 = numeros.filter(numero => numero % 3 === 0);
document.writeln("Divisíveis por 3:", divisiveisPor3);

// Números divisíveis por 4
let divisiveisPor4 = numeros.filter(numero => numero % 4 === 0);
document.writeln("Divisíveis por 4:", divisiveisPor4);

// Números divisíveis por 3 e 4 ao mesmo tempo
let divisiveisPor3e4 = numeros.filter(numero => numero % 3 === 0 && numero % 4 === 0);
document.writeln("Divisíveis por 3 e 4:", divisiveisPor3e4);

// Ordenar nomes
let ordenarNomes = nomes.sort();
document.writeln("Nomes ordenados:", ordenarNomes);

// Nomes começando com F
let nomesComF = nomes.filter(nome => nome.startsWith('F'));
document.writeln("Nomes que começam com 'F':", nomesComF);

// Nomes com mais de 6 letras
let nomesMaisDe6Letras = nomes.filter(nome => nome.length > 6);
document.writeln("Nomes com mais de 6 letras:", nomesMaisDe6Letras);

// Alunos ordenador por nome reverso
let alunosReverso = alunos.sort((a, b) => b.nome.localeCompare(a.nome));
document.writeln("Alunos ordenados por nome reverso:", alunosReverso);

// Números de pessoas por genêro
let contadorGenero = alunos.reduce((contagem, aluno) => {
    contagem[aluno.genero] = (contagem[aluno.genero] || 0) + 1;
    return contagem;
}, {});
document.writeln("Número de pessoas por gênero:", contadorGenero);

// Pessoas com a idade de 26
let pessoasComIdade26 = alunos.filter(aluno => aluno.idade == 26);
document.writeln("Pessoas com a idade de 26:", pessoasComIdade26);

// Todos são do gênero masculino?
let todosSaoMasculinos = alunos.every(aluno => aluno.genero === 'Masculino');
document.writeln("Todos são do gênero masculino?", todosSaoMasculinos);

// Alguém é do genêro feminino?
let algumFeminino = alunos.some(aluno => aluno.genero === 'Feminino');
document.writeln("Alguém é do gênero feminino?", algumFeminino);