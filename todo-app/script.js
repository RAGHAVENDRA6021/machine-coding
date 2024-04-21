document.addEventListener('DOMContentLoaded',function(){
    const todoForm = document.querySelector('.todo-form')
    const todoInput = document.querySelector('.todo-input')
    const todoList = document.querySelector('.todo-list')
    const todoButton = document.querySelector('.todo-submit')
    let editMode = false;
    let editItem = null;
    todoForm.addEventListener('submit',function(event){
        event.preventDefault();
        const todoText = todoInput.value.trim()
        if(editMode){
            editItem.firstChild.innerText = todoText;
            todoButton.innerText = 'ADD TODO';
            editMode = false;
            editItem = null;
            return;
        }
        if(todoText!==''){
            // add todos
            addTodo(todoText)
            todoInput.value = ''
        }
        else{
            alert('Please Add Todos')
        }
    }) 

    todoList.addEventListener('click',function(event){
        const clickedElement = event.target
    
        if(clickedElement.tagName==='BUTTON'){
            const todoItem = clickedElement.parentNode;
            if(clickedElement.innerText==='🚮'){
                //delete item;
                todoItem.remove()
            }
            else if(clickedElement.innerText==='✏️'){
                //edit item;
                editMode = true;
                editItem = todoItem;
                todoButton.innerText = 'Edit TODO';
                todoInput.value = todoItem.firstChild.innerText;
                todoInput.focus();

            }
        }
        
    })

    function todoElement(text){
        const liElement = document.createElement('li')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        liElement.className = 'todo'

        liElement.innerHTML = `<span>${text}</span>`;
        editButton.innerText = '✏️'
        deleteButton.innerText =  '🚮'
        liElement.appendChild(editButton)
        liElement.appendChild(deleteButton)
        return liElement;
    }

    function addTodo(text){
        const todo = todoElement(text);
        todoList.appendChild(todo)
    }

    
})