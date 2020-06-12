/*
3º exercício
A partir do seguinte vetor:
    let nomes = ["Diego", "Gabriel", "Lucas"];

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
    ● Diego
    ● Gabriel
    ● Lucas
*/

(function(){
    let nomes = [];
    let $listElement = document.querySelector('ul')
    let $inputElement = document.querySelector('#name');
    let $buttonElement = document.querySelector('#button');

    $buttonElement.addEventListener('click', function() {
        return adicionar();
    }, false)

    function adicionar() {
        let conteudo = $inputElement.value
        if (conteudo)
            addItem($inputElement.value);
        $inputElement.value = '';
    }

    function addItem(item) {
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(item);

        liElement.appendChild(textElement);
        $listElement.appendChild(liElement);
    }

    function initialize() {
        for (nome of nomes) {
            addItem(nome)
        }
    }
    initialize()
})();