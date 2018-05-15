
    var userInput = document.getElementById('userInput');
    var addBtn = document.getElementById('addBtn');

    var todoUl = document.getElementById('todo');//incomplete tasks ul
    var doneUl = document.getElementById('done');//completed tasks ul


//make new li item with task label, checkbox, label, edit/delete button; RETURN LI
    var createNewLi= (inputString)=>{
      var itemLi = document.createElement('li');
      itemLi.className="itemLi underline"

      var checkbox = document.createElement('input');//checkbox type="checkbox"
      checkbox.type = "checkbox";

      var label = document.createElement('label');//label
      label.innerText = inputString;

      var editButton = document.createElement('button');
      editButton.innerText = "Edit";
      editButton.className = "editBtn btn black-text mr";

      var deleteButton = document.createElement('button');
      deleteButton.innerText = "Delete";
      deleteButton.className="deleteBtn btn btn-danger mr";

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
        if(userInput.value !==" "){

        }
        var itemLi = createNewLi(userInput.value);

        todoUl.appendChild(itemLi);
      //  bindEvent(itemLi, markDone());
        userInput.value=" ";
    }

    //edited input mode
      var editLabel = (e)=>{
        const parent = e.target.parentNode;
        var editInput = document.createElement('input');//txt
        editInput.type = "text";
        // editInput.className = "black-text";
        var itemLi = e.target.previousSibling;
        // var label = document.createElement('label');
        editInput.value = itemLi.textContent;
        parent.appendChild(editInput);
        console.log(parent);
        // var containsEditTodo=itemLi.classList.contains("editTodo");
        //
        // if(containsEditTodo){
        //   label.innerText = editInput.value;
        // }else {
        //   editInput.value = label.innerText;
        // }
        //
        // itemLi.classList.toggle('editTodo');
      }

//remove Li
    var removeTask = ()=>{


      var itemLi = this.parentNode;
      var ul = itemLi.parentNode;
      ul.removeChild(itemLi);
    }

//checkbox: li=> to Done List
    var markDone = ()=>{

console.log(this);
      var itemLi = this.parentNode;
      doneUl.appendChild(itemLi);
      bindEvent(itemLi, notDone);
    }
//checkbox: li=> to Todolist
    var notDone = ()=>{


      var itemLi=this.parentNode;
      todoUl.appendChild(itemLi);
      bindEvent(itemLi, markDone);
    }



    //Event Listeners
    addBtn.addEventListener(
      'click',
      ()=>{
        addTask()
      }
    )


    var bindEvent = (itemLi, checkBoxEvent)=>{

      var checkbox = itemLi.querySelector('input[type=checkbox]');
      var editButton = itemLi.querySelector('button.editBtn.btn.btn-default');
      var deleteButton = itemLi.querySelector('button.deleteBtn.btn.btn-danger');

      editButton.addEventListener(
        'click',
        (e)=>{
          editLabel(e)
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
        (event)=>{
          if(this.checked){
            markDone().call(event.target);
          } else {
            notDone();
          }
        }
      )
    }

    for (let i = 0; i < todoUl.children.length; i++){

		//bind events to list items chldren(tasksCompleted)
		bindEvent(todoUl.children[i], markDone);
	}




//cycle over completedTasksHolder ul list items
	for (let i = 0; i< doneUl.children.length; i++){
	//bind events to list items chldren(tasksIncompleted)
		bindEvents(doneUl.children[i],taskIncomplete);
	}
