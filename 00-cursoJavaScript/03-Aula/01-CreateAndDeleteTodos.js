let listELement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app button');

let todos = [
    'Estudar Javascript',
    'Meditar',
    'Ler'
];

function renderTodos(){
    listELement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')')

        let textElement = document.createTextNode('Excluir');

        linkElement.appendChild(textElement);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listELement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo(){
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

//btnElement.onclick = addTodo;

btnElement.addEventListener('click', addTodo, false);

function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}