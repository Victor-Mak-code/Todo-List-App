// CREATE NEW TASK POP UP
var createNewTask = function(){
    var headerPrimary, headerSecondary, popUp, TodoName,userName

     headerPrimary = document.querySelector('.header-primary');
     headerSecondary = document.querySelector('.header-secondary');
     popUp = document.querySelector('.popup-box');
     TodoName = document.getElementById('TodoName').value;
     userName = document.getElementById('userName').value;

    if(TodoName === '' || userName === ''){
        alert('Please Fill The Form');
    }
    else{
        
        headerPrimary.textContent = TodoName + ' - ';
        headerSecondary.textContent = userName;
        popUp.style.display = 'none';
    }
    
};

// TOGGLER FOR DARK MODE
var toggler, body, taskErrMsg, taskValue;
    toggler = document.querySelector('.toggle-icon');
    body = document.body;
    taskErrMsg = document.querySelector('.task-err-msg');
    taskValue = document.querySelector('.current-task');
toggler.onclick = () =>{
    toggler.classList.toggle('active');
    body.classList.toggle('active');
    taskErrMsg.classList.toggle('active');
    taskValue.classList.toggle('active');

}



// Event Listeners Controller
var EventListeners = function(){

     document.querySelector('.create-task-btn').addEventListener('click', createNewTask);

    document.querySelector('.btn').addEventListener('click', function(){
        taskInput()
        clearFields()
    });

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            taskInput()
            clearFields()
        }
    });


    document.querySelector('.main').addEventListener('click', function(event){
            var idNumber, el;
            idNumber = event.target.parentNode.parentNode.parentNode.id;
            el =  document.getElementById(idNumber);
            el.parentNode.removeChild(el);

    });

};

EventListeners();

// TASK & UI INPUT CONTROLLER 
var taskInput = function(){
    var input,taskErrMsg;
    input = document.querySelector('.input-field').value;
    taskErrMsg = document.querySelector('.task-err-msg');

   
    var Task = function(task){
    this.id = Math.random();
    this.task = task;
    }
    
    var newTask = new Task(input);
        
    if(input !== ''){
        var element = '.current-task';
        var html = '<div class="current-task" id="task-%0%"><h3 class="task-values">%movies%<span class="icon"><i class="fa fa-times" aria-hidden="true"></i></span></h3></div>';
    
          
        var newHtml = html.replace('%movies%', newTask.task);
        newHtml = newHtml.replace('%0%', newTask.id);
        
        if(newTask.task.length > 30){
                taskErrMsg.textContent = 'Task should not be Morethan 30 Letters';
        }
         else{
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
                taskErrMsg.textContent = '';
        }
    
        }
    
    else{
        taskErrMsg.textContent = 'Task fields cannot be Empty';
           
    }

};

// CLEAR INPUT FIELD FUNCTION
var clearFields = function(){
    var inputFields, inputFieldsArr;
    inputFields = document.querySelectorAll('.input-field');
    inputFieldsArr = Array.prototype.slice.call(inputFields);
    

   inputFieldsArr.forEach(function(current, index, array){
        current.value = "";
   });

   inputFieldsArr[0].focus()

};
