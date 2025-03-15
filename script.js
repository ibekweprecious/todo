let userTodo = document.getElementById('usersinfo');
const btnSubmit = document.getElementById('submit');
let UserTodoList = document.getElementById('todoList');

  

btnSubmit.addEventListener('click', function(){
    // getting the users data from the input
    const userTask = userTodo.value.trim();
    // userTask ='';
    // console.log(userTask)

    if (userTask === "") {
        alert('Please enter a task!');
        return;
    }

    // create the list item and make its value the users task
    const listItem = document.createElement('li');
    listItem.style.listStyle = 'number';
    listItem.style.cursor = 'pointer';
    listItem.textContent = userTask;

    listItem.addEventListener('click', function(){
      listItem.style.textDecoration = 'line-through';
      listItem.style.listStyle = 'none';
      removeTask.textContent = '✅';
    });

    // create a button to cancel the task
   const removeTask = document.createElement('button');
   removeTask.textContent = '❌';
   removeTask.style.padding ='5px';
   removeTask.style.marginLeft ='20px';
    removeTask.addEventListener('click', function() {
        
        listItem.style.display = 'none';
    });

    listItem.appendChild(removeTask);

    // get the list
    todoList.appendChild(listItem);

    userTodo.value = '';


});