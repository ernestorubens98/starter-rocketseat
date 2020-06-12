/*
1º exercício
Crie uma função que dado o objeto a seguir:

    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" nº 1293.
*/ 
let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
};

const retornaEndereco = objetoEndereco => {
    console.log(`O usuário mora em ${objetoEndereco.cidade} / ${objetoEndereco.uf}, no bairro ${objetoEndereco.bairro}, na rua "${objetoEndereco.rua}" nº ${objetoEndereco.numero}.`);
};
retornaEndereco(endereco);
console.log('\n');

/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

    function pares(x, y) {
        // código aqui
    }
    pares(32, 321);
*/
const pares = (x, y) => {
    for (x; x <= y; x++) {
        if (x % 2 == 0)
            console.log(x);
    }
};
pares(3, 13);
console.log('\n');

/*
3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

    function temHabilidade(skills) {
        // código aqui
    }
    var skills = ["Javascript", "ReactJS", "React Native"];
    temHabilidade(skills); // true ou false

    Dica: para verificar se um vetor contém um valor, utilize o método indexOf
*/
let skills = ['ReactJS', 'React Native', 'Javascript'];

const temHabilidade = findSkills => {
    console.log(!!findSkills.indexOf('Javascript'));
}
temHabilidade(skills);
console.log('\n');

/*
4º exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
    function experiencia(anos) {
        // código aqui
    }

    var anosEstudo = 7;
    experiencia(anosEstudo);

    De 0-1 ano: Iniciante
    De 1-3 anos: Intermediário
    De 3-6 anos: Avançado
    De 7 acima: Jedi Master

*/
let anosEstudo = 7;

const experiencia = anos => {
    if (anos > -1 && anos <= 1) {
        console.log('Iniciante');
    } else if(anos > 1 && anos <= 3) {
        console.log('Intermediário');
    } else if (anos > 3 && anos <= 6) {
        console.log('Avançado');
    } else {
        console.log('Jedi Master');
    }
}
experiencia(anosEstudo);
console.log('\n');

/*
5º exercício
Dado o seguinte vetor de objetos:

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

Escreva uma função que produza o seguinte resultado:
    O Diego possui as habilidades: Javascript, ReactJS, Redux
    O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

let usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

const percorreUsuariios = () => {
    for (let usuario of usuarios) {
        console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`);
    }
}
percorreUsuariios(usuarios);