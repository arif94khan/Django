var roster = []
//add new student
function add() {
  var newname = prompt("What name would you like to add?")
  roster.push(newname)
}

// remobe student
function remove() {
  var remname = prompt("What name would you like to remove?")
  var index = roster.indexOf(remname);
  roster.splice(index,1)
}
//DISPLAY roster
 function display() {
   console.log(roster);
 }

var start = prompt("would you like to start the page roster web app y/n")
var request = "empty";

if (start === 'y') {
while (request !=='quit') {
 request = prompt("please select an action: add, remove, display or quit")
  if (request === 'add') {
    add();
  }else if (request === 'display') {
    display();
  }else if (request === 'remove') {
    remove();
  }else {
    alert("Not recognized")
    request = "quit"
    }
   }
  }
alert("Thanks for using the web app!Please refresh to start over!")
