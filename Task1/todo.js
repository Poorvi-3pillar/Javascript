// This is the array that will hold the todo list items
let todoItems = [];
// This function will create a new todo object with text input, 
//check to see which task is completed and id for remove


// Render the todo items
function renderTodo(todo)
{
    const list=document.querySelector("#todoList");
    const item=document.querySelector(`[todo-id='${todo.id}']`);

    if(todo.deleted)
    {
        item.remove();
        return
    }
    const node=document.createElement("li");
    node.setAttribute('todo-id',todo.id);
    const deleteButton =document.createElement("button");
    deleteButton.classList.add('js-delete-todo');
    deleteButton.innerHTML="Delete" 
    node.innerHTML = `
    <span>${todo.text}</span>
    `;
    node.appendChild(deleteButton)
    list.appendChild(node)
}
function addTodo(text)
{
    const todo={
        text,
        id:Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
}

function deleteTodo(id)
{
    const index=todoItems.findIndex(item=>item.id===Number(id));
    const todo={
        deleted:true,
        ...todoItems[index]
    };
    todoItems=todoItems.filter(item=>item.id!==Number(id));
    renderTodo(todo);
}
//Select the form element
const form = document.querySelector("#todoForm");
//Add event listener
const add = document.querySelector("#button");
add.addEventListener('click',event=>{
    //prevent page from refresh on clicking
    event.preventDefault();
    //select the input
    const input=document.querySelector("#todoInput");
    //get value of input and remove whitespaces we can use createNodetext also
    const text=input.value.trim();
    if(text!=='')
    {
        addTodo(text);
        //reset value after pushing to ''
        input.value='';
        //give focus to element
        input.focus();
    }
});

const list=document.querySelector('#todoList');
list.addEventListener('click',event=>{
    if(event.target.classList.contains('js-delete-todo'))
    {
        const itemKey=event.target.parentElement;
        deleteTodo(itemKey.getAttribute('todo-id'));
    }
});

const deleteall=document.querySelector('.delete-all');
deleteall.addEventListener('click',event=>{
    todoItems.splice(0);
})

const searchBox = document.getElementById('searchBox');

searchBox.addEventListener('input',()=>{
    list.innerHTML="";
    const valueToBeSearched=searchBox.value.trim();
    todoItems.forEach(item=>{
        const {text} = item;
        if(text.includes(valueToBeSearched)){
            renderTodo(item);
        };
    })
})

//Second way to do render or display item is
// function renderTodo() {
//     var list = document.getElementById('toDoList');
    

//     for (var i = 0; i < todoItems.length; i++) {
//         var li = document.createElement('li');
//         var listItem = li.appendChild(document.createTextNode(todoi[i]));
//         list.appendChild(listItem);
//     }
// }

// function remove(todo)
// {
//     const removeTask = document.createElement('input');
//     removeTask.setAttribute('type', 'button');
//     removeTask.setAttribute("value", "Remove");
//     removeTask.setAttribute("id", "removeButton");
//     removeTask.addEventListener('click', function(e) {
//         .parentNode.removeChild(node);
//     }, false);
//     node.appendChild(removeTask);

// }