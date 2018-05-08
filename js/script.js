


var ul = document.querySelector('ul'); //click on list-->check completed tasks
ul.addEventListener(
  'click',
  (e) => {
    if(e.target.tagName === "li"){
      ev.target.classList.toggle('checked');
    }
  },
  false);

//Make a new li for each user input
function createLi() {

  let li = document.createElement("li"); //make li element
  let input = document.getElementById('newtask').value;
  let txt = document.createTextNode(input); //make text node in user-input

  li.appendChild(txt);

    //check if input is empty
    if (input === " " ){
      alert('Enter a task to do.');
    }
    else {//add li to ul

      document.getElementById('incomplete').appendChild(li);
    }

    document.getElementById('newtask').value = "";

}


//
