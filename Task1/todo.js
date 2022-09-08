// This is the array that will hold the todo list items
let todoItems = [];
// This function will create a new todo object with text input, 
//check to see which task is completed and id for remove

// Render the todo items
function renderTodo(todo)
{
    const list=document.querySelector("#todoList");
    //select item which todo-id matches
    const item=document.querySelector(`[todo-id='${todo.id}']`);
    //delete the item
    if(todo.deleted)
    {
        item.remove();
        return
    }

    const node=document.createElement("li");
    //create attribute as it uniquely define the key
    node.setAttribute('todo-id',todo.id);
    //creating delelte btn
    const deleteButton =document.createElement("button");
    deleteButton.classList.add('js-delete-todo');
    deleteButton.innerHTML="Delete" 
    //creating span 
    node.innerHTML = `
    <span>${todo.text}</span>
    `;
    //appending node and btn
    node.appendChild(deleteButton)
    list.appendChild(node)
}

//function to add item in an array
function addTodo(text)
{
    const todo={
        text,
        id:Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
}



//function to delete each item
function deleteTodo(id)
{
    const index=todoItems.findIndex(({id})=>id===Number(id));
    //create an object 
    const todo={
        deleted:true,
        ...todoItems[index]
    };
    //create an array after removing the items 
    todoItems=todoItems.filter(({id})=>id!==Number(id));
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
    //updated from text!=='' to text 
    if(text)
    {
        addTodo(text);
        //reset value after pushing to ''
        input.value='';
        //give focus to element
        input.focus();
    }
});



//selecting the delete button
const list=document.querySelector('#todoList');
list.addEventListener('click',event=>{
    if(event.target.classList.contains('js-delete-todo'))
    {
        const itemKey=event.target.parentElement;
        deleteTodo(itemKey.getAttribute('todo-id'));
        //getattribute gives string in retrun
    }
});


//function to delelte all items
const deleteall=document.querySelector('.delete-all');
deleteall.addEventListener('click',event=>{
    while(todoItems.length>0)
    {
        todoItems.pop();//using pop as it is faster
    }
    //todoItem.length=0;
    //todoItems=[];
})


//function to search
const searchBox = document.getElementById('searchBox');
//selecting search box
searchBox.addEventListener('input',()=>{
    //resetting the list 
    list.innerHTML="";
    const valueToBeSearched=searchBox.value.trim();
    todoItems.forEach(item=>{
        //destructuring the object 
        const {text} = item;
        if(text.includes(valueToBeSearched)){
            renderTodo(item);
        };
    })
})