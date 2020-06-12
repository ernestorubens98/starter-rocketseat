let inputElement = document.querySelector('#input');
let buttonElement = document.querySelector('#pesquisa');
let buttonElementNova = document.querySelector('#novapesquisa')
let listaElement = document.querySelector('#lista')

buttonElement.addEventListener('click', () => {
    let valor = inputElement.value
    const linkGit = `https://api.github.com/users/${valor}/repos`;
    consulta(linkGit)
    inputElement.value = '';
}, false);

buttonElementNova.addEventListener('click', function limpaLista() {
    listaElement.innerHTML = ''
}, false)

let consulta = url => {
    axios.get(url)
        .then(response => {
            addRepositorio(response.data)
        })
        .catch(error => {
            console.warn('Usuário inválido', error);
        })
}

function addRepositorio(usuario) {
    listaElement.innerHTML = '';
    for(repo of usuario) {
        let textoItem = document.createTextNode(repo.name)
        let item = document.createElement('li');

        item.appendChild(textoItem);
        listaElement.appendChild(item);
    }
};




/*
let minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    })
};
*/

/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/');

xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
*/