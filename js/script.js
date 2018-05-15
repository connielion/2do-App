document.addEventListener(
  'load',
  ()=>{
    var userInput = document.getElementById('userInput');
    var addBtn = document.getElementById('addBtn');

    var todoUl = document.getElementById('todo');//incomplete tasks ul
    var doneUl = document.getElementById('done');//completed tasks ul

    var createNewLi= (inputString)=>{ //make new li item with task label, checkbox, label, edit/delete button
      var itemLi = document.createElement('li');
      itemLi.appendChild(checkbox);

      var checkbox = document.createElement('input');//checkbox type="checkbox"
        checkbox.type = "checkbox";

      var label = document.createElement('label');//label
      var editInput = document.createElement('input');//txt
        editInput.type = "text";
      var editButton = document.createElement('button');
        editButton.innerText = "Edit";
        editButton.className = "editBtn";
      var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.className="deleteBtn";
        label.innerText = inputString;


        itemLi.appendChild(label);
        itemLi.appendChild(editInput);
        itemLi.appendChild(editButton);
        itemLi.appendChild(deleteButton);

    return itemLi;
    }




      var editLabel = ()=>{
        console.log('edit...');

        var itemLi = this.parentNode;
        var editInput= itemLi.querySelector('input[type=text]');
        var label = itemLi.querySelector('label');
        var containsEditTodo=itemLi.classList.contains("editTodo");

        if(containsEditTodo){
          label.innerText = editInput.value;
        }else {
          editInput.value = label.innerText;
        }

        itemLi.classList.toggle('editTodo');
      }

    var removeTask = ()=>{
      console.log('remove..');

      var itemLi = this.parentNode;
      var ul = itemLi.parentNode;
      ul.removeChild(itemLi);
    }

    var markDone = ()=>{
      console.log('finish task..');

      var itemLi = this.parentNode;
      doneUl.appendChild(itemLi);
      //bindEvent(itemLi, notDone);
    }

    var notDone = ()=>{
      console.log('not done..');

      var itemLi=this.parentNode;
      todoUl.appendChild(itemLi);
      //bindEvent(itemLi, markDone);
    }
*/

    //Event Listeners
    addBtn.addEventListener(
      'click',

      addTask()
    )



    var bindEvent = (itemLi, checkBoxEvent)=>{

      var checkbox = itemLi.querySelector('input[type=checkbox]');
      var editButton = itemLi.querySelector('button.editBtn.btn.btn-default');
      var deleteButton = itemLi.querySelector('button.deleteBtn.btn.btn-danger');

      editButton.addEventListener(
        'click',
        editTodo()
      )

      deleteButton.addEventListener(
        'click',
        removeTask()
      )

      var checkBoxEvent = checkbox.addEventListener(
        'change',
        ()=>{
          if(this.checked){

          } else {

          }
        }
      )

  })
;
