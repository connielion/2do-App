
//Make a new li for each user input
function createLi() {

  var li = document.createElement("li"); //make li element
  var input = document.getElementsByClassName('newtask').value;
  var txt = document.createTextNode(input); //make text node in user-input

  li.appendChild(txt);

    //check if input is empty
    if (input === " "){
      alert('Enter a task to do.');
    }
    else {//add li to ul
      document.getElementsByClassName('incompleted').appendChild('li');
    }

    document.getElementsByClassName('newtask').value = "";
}


var list = document.getElementsByTagName("li");
var i;

for (i = 0; i < list.length; i++) {
  var span = document.createElement('span');
  var xsign = document.createTextNode("\u02DF"); //http://graphemica.com/%CB%9F
  span.className = "done"; //gives span tag class "done"
  span.appendChild(xsign);
  list[i].appendChild(span);
}

var ul = document.querySelector('ul'); //click on list-->check completed tasks

ul.addEventListener(
  'click',
  e => {
    if(e.target.tagName === "li"){
      ev.target.classList.toggle('checked');
    }
  },
  false,);
