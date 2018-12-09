// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);

    //remove task
    taskList.addEventListener('click', removeTask);

    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
}

//Add Task
function addTask(e) {
    if(taskInput.value === '' ){
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');

    //add a class
    li.className = 'collection-item';

    //create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link element
    const link = document.createElement('a');

    //add link class name
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append (put inside) the link to li
    li.appendChild(link);

    //append li to ul
   taskList.appendChild(li);

   //clear input
   taskInput.value = '';

   e.preventDefault();
}   
    //remove task

    function removeTask(e){
        if (e.target.parentElement.classList.contains('delete-item')) {
            if(confirm('are you sure')){
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    function clearTasks(){
        /* can do this but it's slower: 
        taskList.innerHTML = ""; */

        //while loop is faster:
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }