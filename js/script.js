
var userInput = document.getElementById('userInput');
var addBtn = document.getElementById('addBtn');
var taskLists = {
  todo: document.getElementById('todo'),
  done: document.getElementById('done')
}//completed tasks ul
var form = document.getElementById('form');

//REMOVES LI
function removeTask() {
    var li = this.parentNode;
    console.log(li)
    var p = li.parentNode;

    p.removeChild(li);
}
//EDIT MODE
var editTask = (event) => {

    var item = event.target.parentNode;
    var edit = item.querySelector("input[type=text]");
    var label = item.querySelector('label');

    var hasEditTodo = item.classList.contains('editTodo');


    if(hasEditTodo){
      label.textContent = edit.value;
      label.style.display = 'inline';
      label.style.display = 'none';
    } else {
      edit.value = label.textContent;
      edit.style.display = 'inline-block';
      label.style.display = 'none';
    }

    item.classList.toggle('editTodo');
}


function createNewLi(taskInput, markDone) {
//MAKES LI
  var itemLi = document.createElement('li');
  itemLi.className = "li-padding black-bg"

  var checkbox = document.createElement('input');//checkbox type="checkbox"
  checkbox.type = "checkbox";

  var label = document.createElement('label');//label
  label.className = "white-text Montserrat"
  label.innerText = taskInput;

  var editButton = document.createElement('button');
  editButton.innerText = "Edit/Save";
  editButton.className = "editBtn btn black-text margin-side";

  var deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  deleteButton.className="deleteBtn btn btn-danger margin-side";

  var edit = document.createElement('input');
  edit.type = 'text';
  edit.style.display = 'none';

  checkbox.addEventListener('click', markDone);
  deleteButton.addEventListener('click', removeTask);

  editButton.addEventListener('click', editTask);

  itemLi.appendChild(checkbox);
  itemLi.appendChild(deleteButton);
  itemLi.appendChild(editButton);
  itemLi.appendChild(label);
  itemLi.appendChild(edit);

  return itemLi;
}

var markDone = ()=>{//CHECKBOX EVENT--->append to list

  var itemLi = event.target.parentElement;
  var ul = itemLi.parentElement.id;

  taskLists[ul === 'done' ? 'todo' : 'done'].appendChild(itemLi);
  this.checked === 'todo' ? "true" : "false";//checked=true
  userInput.value = "";
  userInput.focus();

}

var add = function(taskLi){
  taskLists.todo.appendChild(taskLi);
  this.checked = false;
}
//CHECKBOX EVENT
var markDone = (e)=>{
    var taskLi = e.target.parentElement;
    var list = taskLi.parentElement.id;
    var doneTxt = taskLi.style.textDecoration = "linethrough";
    var notDoneTxt = taskLi.style.textContent = 'none';

    taskLists[list === 'done' ? 'todo' : 'done'].appendChild(taskLi);
    this.checked === true ? 'doneTxt' : 'notDoneTxt';
    this.checked === 'todo' ? 'true' : 'false';
    userInput.value = '';
    userInput.focus()
};

var inputFocus = (event) => {
  var item = userInput.value;
    add(createNewLi(item, markDone))
    userInput.value = '';
    userInput.focus();
}

addBtn.addEventListener('click', inputFocus);

form.addEventListener('submit', (e)=>{
e.preventDefault();
    if(e.keyCode === 13){
      console.log(e);
    }

})

userInput.addEventListener('keyup',
  (e)=>{
    if(e.keyCode === 13){
      inputFocus();
    }//enter/return key
  }
)
