


const add = document.getElementById("add");
const addTask = document.getElementById("addTask");
const list = document.getElementById("lists");

list.addEventListener("click", (event) => {
  const taskNumber = event.target.getAttribute('tasknumber')
  if (taskNumber !== null) {
    const listId = 'listGroup' + taskNumber;
    const listGroup = document.getElementById(listId);
    listGroup.remove()
  }
  
});
let count = 0;

// !--function deleteListEntry(event) {
//   event.target.parentNode.remove();
// }

add.addEventListener("submit", (event) => {
  event.preventDefault();
  let deleteId = 'deleteIcon' + count;
  let listId = 'listGroup' + count;
  const html = `<li id=${listId}><span>${addTask.value}</span><i id=${deleteId} tasknumber=${count} class="fa fa-trash-alt icon"></i></li>`;

  list.innerHTML += html;
  count += 1;

  const warn = "EMPTY";

  if (addTask.value == "") {
    alert(warn);
    list.innerHTML = "";
  }

  add.reset();

  const listGroup = document.getElementById(listId);
 
});


