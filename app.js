// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
    if(taskInput.value === '' ){
        alert('Add a task');
    }

    //create li elemnt
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
    // append the link to li
    li.appendChild(link);
    //append li to ul
    li.appendChild(li);



    e.preventDefault();
}