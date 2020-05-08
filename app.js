// constans
const btn = document.querySelector('.submit-button');
const input = document.querySelector('#input-form');
const todoList = document.querySelector('.todo-list');

// variables


// functions
function addElements(e) {
    e.preventDefault();

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    const newLi = document.createElement('li');
    newLi.classList.add('todo-li');
    newLi.innerText = input.value;

    todoList.appendChild(newDiv);
    newDiv.appendChild(newLi);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completeButton.classList.add('complete-btn');
    newDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    newDiv.appendChild(trashButton);

    input.value = '';
}

function buttonAction(e) {
    item = e.target;

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
}

// Listeners
btn.addEventListener('click', function(e){
    addElements(e);
});

todoList.addEventListener('click', buttonAction);