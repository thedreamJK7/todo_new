const inpuT = document.getElementById('input'),
    todoUl = document.getElementById('todo'),
    forM = document.querySelector('form');

forM.addEventListener('submit', (e)=> {
    e.preventDefault();

    formaBosildi();
});

function formaBosildi(todo) {
    const todoText = inpuT.value;
    const todoLi = document.createElement('li');
    todoLi.classList = "todos";
    todoLi.innerHTML = todoText;
    inpuT.value = '';
    todoUl.appendChild(todoLi);
    todoLi.addEventListener('click', ()=> {
        todoLi.classList.add('completed');
    })
    todoLi.addEventListener('contextmenu', (e)=> {
        e.preventDefault();
        todoLi.remove();
    })
}