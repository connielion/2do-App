/*
  ==================PROBLEMS!!========================
1.EDITBUTTON TEXTCONTENT NOT CHANGING TO 'SAVE'
  -check if input changed?
2.New input not overwriting old:
  - line 72?
3.Delete button not working?
  -is eventlistener working?

4.can create more than 1 Input field more than once via edit button per Li
  -how to make edit field input replace old input
5. Checkbox not working: want to append item to #doneUl when 'checked'


*/


    var userInput = document.getElementById('userInput');
    var addBtn = document.getElementById('addBtn');
    var todoUl = document.getElementById('todo');//incomplete tasks ul
    var doneUl = document.getElementById('done');//completed tasks ul

//make new li item with task label, checkbox, label, edit/delete button; RETURN LI
    var createNewLi= (inputString)=>{
      var itemLi = document.createElement('li');

      var checkbox = document.createElement('input');//checkbox type="checkbox"
      checkbox.type = "checkbox";

      var label = document.createElement('label');//label
      label.innerText = inputString;

      var editButton = document.createElement('button');
      editButton.innerText = "Edit";
      editButton.className = "editBtn btn black-text";

      var deleteButton = document.createElement('button');
      deleteButton.innerText = "Delete";
      deleteButton.className="deleteBtn btn btn-danger";

      editButton.addEventListener('click', (e) => {
        editLabel(e)
      })
      //Appending labels, buttons, checkbox
        itemLi.appendChild(label);
        // itemLi.appendChild(editInput);
        itemLi.appendChild(editButton);
        itemLi.appendChild(deleteButton);
        itemLi.appendChild(checkbox);


    return itemLi;
    }



//Called in addBtn addEventListener
    var addTask = ()=>{

        var itemLi = createNewLi(userInput.value);

        todoUl.appendChild(itemLi);
      //  bindEvent(itemLi, markDone());
        userInput.value=" ";
    }

    //edited input mode
      var editLabel = (e)=>{
//e.target = editBtn?
        const parent = e.target.parentNode;
        var editInput = document.createElement('input');//txt
        editInput.type = "text";
        editInput.className = "black-text";
        var itemLi = e.target.previousSibling; //previousSibling = input field

        editInput.value = itemLi.textContent;
        parent.appendChild(editInput);
        parent.insertBefore(editInput, e.target);
        console.log(parent);
/*
        var editBtn = itemLi.getElementsByClassName('.editBtn');
        itemLi.className="editTodo";
        var containsEditTodo = this.classList.contains("editTodo");

         if(containsEditTodo){
           editInput.innerText = editInput.value;
           editBtn.textContent = "Edit";
         }else {
            editInput.value = label.innerText;
            editBtn.textContent = "Save";
        }
*/
        itemLi.classList.toggle('editTodo');

      }

//remove Li item
    var removeTask = ()=>{

      var itemLi = this.parentNode;
      var ul = itemLi.parentNode;
      ul.removeChild(itemLi);
    }

//checkbox: li=> to Done List
    var markDone = ()=>{//CHECKBOX CHECKED


      var itemLi = this.parentNode;
      doneUl.appendChild(itemLi);
      bindEvent(itemLi, notDone());

    }
//checkbox: li=> to Todolist
    var notDone = ()=>{
      var itemLi=this.parentNode;
      todoUl.appendChild(itemLi);
      bindEvent(itemLi, markDone());
    }



    //Event Listeners
    addBtn.addEventListener(
      'click',
      ()=>{
        if(userInput.value !==" "){

          addTask()
        } else {
          alert('Enter task!');
        }
      }
    )


    var bindEvent = (itemLi, checkBoxEvent)=>{

          var checkbox = itemLi.querySelector('input[type=checkbox]');
          var editButton = itemLi.querySelector('btn.editBtn');
          var deleteButton = itemLi.querySelector('button.deleteBtn');

          editButton.addEventListener(
            'click',
            (e)=>{
              editLabel(e);
            }

          )

          deleteButton.addEventListener(
            'click',
            ()=>{
              removeTask()
            }
          )


          var checkBoxEvent = checkbox.addEventListener(
            'change',

                (e)=>{
                  if(this.checked){
                    console.log(this);
                    markDone().call(e.target);
                  } else {
                    notDone().call(e.target);

                  }
                }
          )
    } //end bindEvent()

    for (let i = 0; i < todoUl.children.length; i++){

		//bind events to list items chldren(tasksCompleted)
		bindEvent(todoUl.children[i], markDone());
	}




//cycle over completedTasksHolder ul list items
	for (let i = 0; i< doneUl.children.length; i++){
	//bind events to list items chldren(tasksIncompleted)
		bindEvent(doneUl.children[i],notDone());
	}
