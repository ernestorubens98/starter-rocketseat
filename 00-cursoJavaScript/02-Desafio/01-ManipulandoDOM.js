/*
1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.


2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
    }
        return color;
    }
    var newColor = getRandomColor(); // #E943F0

*/
let $buttonCreateSquare = document.querySelector('#button');
let $squaresElement = document.querySelector('.squares')

$buttonCreateSquare.addEventListener('click', () => {
    let square = document.createElement('div');

    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'red';

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    })
    
    $squaresElement.appendChild(square);
}, false);


const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


