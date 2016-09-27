window.onload = function() {
  //Date
var mydate, year, month, day, todaydate;
  mydate = new Date();
  //year      = mydate.getYear();
  month = mydate.getMonth();
  day = mydate.getDay();
  todaydate = mydate.getDate();

  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = new Array("January", "Fibruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  var daytime = document.getElementById('day');
  daytime.innerText = days[day] + ",";

  var today = document.getElementById('today');
  today.innerText = todaydate + "th";

  var monthtime = document.getElementById('month');
  monthtime.innerText = months[month];
  //Date End

//Add Data Tasks

addItemTodo("Buy Pizza on the way to work!");
addItemTodo("Send new updated quote to client");
addItemTodo("Work Lunch with dudes");

var item = document.getElementById('todo').getElementsByTagName("li")[0];
console.log(item);
var completed = document.getElementById('completed');
completed.appendChild(item);

// Count total number of tasks
var list = document.getElementById('todo').getElementsByTagName('li');

var count = list.length;
console.log(count);



}


// Remove and Complete Icons
var removeIcon = '<i class="fa fa-trash-o fill" aria-hidden="true"></i>';
var completeIcon = '<i class="fa fa-check fill" aria-hidden="true"></i>';

// User clicks on the Add button
// If there is any text inside the item field, add that text to the todo list

var taskInput = document.getElementById('item');
taskInput.addEventListener('keyup', function(event) {

  //var key = e.which || e.keyCode;
  var value = document.getElementById('item').value;
  if (event.which === 13) {

    if (value) {
      addItemTodo(value)
      document.getElementById('item').value = '';
    }
  }

});

//Add new Item
function addItemTodo(text) {

  //Add the item to list
  var list = document.getElementById('todo');

  var taskTitle = document.createElement('p');
  taskTitle.classList.add('task-title');
  taskTitle.innerHTML = text;

  var taskTime = document.createElement('p');
  taskTime.classList.add('task-time');

  var currentdate = new Date();
  var h = currentdate.getHours();
  var m = currentdate.getMinutes();
  var ampm = h >= 12 ? 'PM' : 'AM';

  if (h == 24) { h = 0;} else if (h > 12) {h = h - 0;}

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  var datetime = h + ":" + m + " " + ampm;

  taskTime.innerHTML = datetime;

  var item = document.createElement('li');

  var buttons = document.createElement('buttons');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;

  //Add click event for Remove item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeIcon;

  //Add click event for complete item
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(taskTitle);
  item.appendChild(taskTime);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[1]);
}

//Removing Item from the Todo List
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

//Completing Item
function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var toggleitems = (id === 'todo') ? document.getElementById('completed') :  document.getElementById('todo');
  parent.removeChild(item);
  toggleitems.appendChild(item);
}
