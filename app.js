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

    //remove task event
    taskList.addEventListener('click', removeTask);

    //clear tasks
    clearBtn.addEventListener('click', clearTasks);

    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
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

    // append (put inside) the link to li
    li.appendChild(link);

    //append li to ul
   taskList.appendChild(li);

   //clear input
   taskInput.value = '';

   e.preventDefault();
}   
    //remove task
    function removeTask(e) {
        if(e.target.parentElement.classList.contains('delete-item')) {
          if(confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
          }
        }
      }


      //clear tasks
    function clearTasks() {
        // one way to do it
        // taskList.innerHTML = '';

        //or loop through
        // while(taskList.firstChild) {
        //     taskList.removeChild(taskList.firstChild);
        // }

        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
      }


      //filter tasks

      function filterTasks(e) {
        const text = e.target.value.toLowerCase();
        console.log(text);

        document.querySelectorAll('.collection-item').forEach(function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
      }






























//EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card-title')
// });


// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card-content')
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card-content')
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col')
// });



//EVENT DELEGATION


// const deleteMe = document.querySelector('.delete-item secondary-content');

// deleteMe.addEventListener('click', deleteItem);

// function deleteItem(){
//   console.log('delete item');
// }