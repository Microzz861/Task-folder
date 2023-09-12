if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
//I had to put the localstorage code since it won't work on my pc

const toDoList = [];
let addItems = '';
let numTask;
let includeLocal = false;

if(localStorage.getItem('taskNums') === null)
{
localStorage.setItem('taskNums',0);
numTask = 0;
}
else numTask = JSON.parse(localStorage.getItem('taskNums'));

if(localStorage.getItem('Task Array') === null)
localStorage.setItem('Task Array', '[]');

function keyCheck(event) // event is an object
{

  if(event.key === 'Enter') addItem(); // onkeydown and onclick are event listeners 
  else console.log(event.key);

}
function addItem()
{
  numTask++;
  localStorage.setItem('taskNums',JSON.stringify(numTask));
  const item = document.querySelector('.inputPractice1');
  const dateElement = document.querySelector('.js-dateSelect');
  
  const date = dateElement.value;
  const name = item.value;
  
  
  if(date === '' || name === '')
    { 
      dateElement.value = '';
      item.value = '';
      return alert('Please input a name or date for your task!!');

    } 

    localStorage.setItem(`Task ${localStorage.getItem('taskNums')}`,JSON.stringify({name,date}));
    let array = JSON.parse(localStorage.getItem('Task Array'));
    const TName =`Task ${JSON.parse(localStorage.getItem('taskNums'))}`;
    array.push(TName);
    localStorage.setItem('Task Array',JSON.stringify(array));


    console.log(JSON.parse(localStorage.getItem('Task Array')));

  toDoList.push({name, date});
  let i=0;
  while(i < toDoList.length)
  {
  console.log(toDoList[i]);
  i++;
  }
  item.value = '';
  dateElement.value = '';

  addOnToPage();
}

document.getElementById('js-Add').addEventListener('click',addOnToPage());
document.getElementById('js-localAdd').addEventListener('click',getLocalTasks());

function addOnToPage()
{
  let addHtmlItems = '';
for(var i = 0; i < toDoList.length; i++)
{
 const {name,date} = toDoList[i];
 if(includeLocal === true){
 let HtmlItem2 = `<div><p class="cool">${name}</p></div>  <div> <p class="cool"> ${date} <p></div>
 <button style="margin-left:5px;" class="delButton" onclick="toDoList.splice(${i},1); deleteTask(${numTask + i}); addOnToPage(); getLocalTasks();"> Delete Task </button>
 `; 
addHtmlItems += HtmlItem2;
 }
 else
 {
  let HtmlItem2 = `<div> <p class="cool"> ${name} </p></div>  <div> <p class="cool"> ${date} </p></div>
 <button style="margin-left:5px;" class="delButton" onclick="toDoList.splice(${i},1); deleteTask(${numTask + i}); addOnToPage();"> Delete Task </button>
 `; 
addHtmlItems += HtmlItem2;
 }
}
const htmlItem = document.querySelector('.js-addToPage').innerHTML = addHtmlItems;
getLocalTasks();
}

function getLocalTasks()
{
  includeLocal = true;
  let addHtmlItems = '';
  if(JSON.parse(localStorage.getItem('Task Array')) !== null)
{
  let localArray = JSON.parse(localStorage.getItem('Task Array'));
  
  localArray.forEach((value,index) => {
    const {name,date} = JSON.parse(localStorage.getItem(value));

    let HtmlItem2 = `<div>${name}</div>  <div> ${date} </div>
 <button style="margin-left:5px;" class="delButton" onclick=" deleteTask(${index});   addOnToPage(); getLocalTasks();"> Delete Task </button>
 `; 
addHtmlItems += HtmlItem2;

  });
  const htmlItem = document.querySelector('.js-addToPage').innerHTML = addHtmlItems;

}
else alert('The local storage is empty!!!!');
}
function deleteTask(index)
{
  localStorage.removeItem('Task ${index}');
  let array = JSON.parse(localStorage.getItem('Task Array'));
  array.splice(index,1);
  localStorage.setItem('Task Array',JSON.stringify(array));
  
}
