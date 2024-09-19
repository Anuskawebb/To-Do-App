document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    
    function addTask() {
      const taskText = todoInput.value.trim();
      if (taskText === '') return;


    
      const li = document.createElement('li');
  

      const span = document.createElement('span');
      span.textContent = taskText;
      li.appendChild(span);
  

     
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
      li.appendChild(completeBtn);
  
      
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function() {
        todoList.removeChild(li);
      });
      li.appendChild(removeBtn);
  
     
      todoList.appendChild(li);
  
      
      todoInput.value = '';
    }
  
    
    addTaskBtn.addEventListener('click', addTask);
  
   
    todoInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  