if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./Task');
}

let fullArray = null;


if(localStorage.getItem('fullArray') === null) localStorage.setItem('fullArray', '[]');
  else fullArray = JSON.parse(localStorage.getItem('fullArray'));
  console.log(fullArray);


let catModal = null;
let taskModal = null;


let modalColor = null;
let colorOption = null;


let currentlySelected = null;

let addCatButton = null;
let deleteCatManager = null;
let cancelCatDelete = null;
let deleteCatButton = null;




  

function getCurrentDate(){
  var today = new Date();
  const month = (today.getMonth() + 1);
  const day = today.getDate();
  const year = today.getFullYear();
  const fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

function duplicatePreventor(category){
  for(var i=0 ;i<fullArray.length;i++){
    if(category === fullArray[i].catName) 
    return true;
    }
    return false;
  }



  class Category{ 
    constructor(catName,color,dateCreated){
     this.catName = catName;
     this.dateCreated = dateCreated; // put the getCurrentDate function
     this.color = color;
     this.taskCounter = 0;
     this.catScore = 0;
     this.completedTasks = 0;
     this.Tasks = [];
    }
   
     getTodayTasks(){
      //These tasks are already an array inside of the category so just add them.

    }
  }

class Task{
  static taskScore = 5;
  
  constructor(Name, Description, taskDateCreated, DueDate, completion){
    this.Name = Name;
    this.Description = Description;
    this.taskDateCreated = taskDateCreated;
    this.DueDate = DueDate;
    this.completion = completion; //default value is false if not specified in constructor
  }

    get Tasks(){
      return this.displayTask();
    }
    displayTask(){
    return this.Name;
  }
}

function addCategory(){
  let name = document.getElementById('js-input-catName').value;
  const isDuplicate = duplicatePreventor(name);
  if(isDuplicate){
    alert("You already have a category with the same name, pick a new one");
  }
  else{
    let color = document.getElementById('js-selected-color').value;
    let date = getCurrentDate();
    const category = new Category(name,color,date);
    updateCategory(category);   
    addOntoCat(name,color,date);
    displayArray();  
  }
  
}

function addColor(color){

  let colorValue = color;
  let rgbcolor = null;
  switch (colorValue){
    case "Blue":{
      return rgbcolor = 'rgba(0,153,255,.5)';
      break;
  }
    case "Red":{
        
      return rgbcolor = 'rgba(255,0,0,.5)';
      break;
  }
  case "Green":{

    return rgbcolor = 'rgba(24,145,52,.5)';   
    break;
  }
  case "Pink":{

    return rgbcolor = 'rgba(255,0,247,.4)';
    break;
  }
  case "Gray":{
    return rgbcolor = 'rgba(102,99,99,.4)';
    break;
  }

}
}


function addOntoCat(category, color, date){
 const displayer = document.querySelector('.cat-display');
 const bgColor = addColor(color);
 const newCategory = document.createElement("div");
 newCategory.classList.add( "full-cat-container");
 newCategory.id = 'js-' + category;
 newCategory.innerHTML = ` <div class="category" id="js-${category}-body"  >
 <div class="cat-color" id="js-${category}-choose-color" style="background-color:${bgColor}">
 
 </div>
 <div class="Therest">
 <div class="cat-Name">
   <p style="font-size: 1.6em;" id="js-${category}-catName"></p>
   <span id="js-${category}-catDate"></span>
</div>      
<div class="task-progress">
 <div class="progress">
   <p> Completion </p>
     <div class="contain-bar-percent">
   <div class="progress-bar">
     <div class="coat-bar" id="js-${category}-catCoater">
     </div>

   </div>
   <p class="percent" id="js-${category}-catPercent"> 0% </p>
 </div>
 </div>

 <div class="task-amount">
   <span style="margin: 0px !important;">Completed:</span>
   <span style="margin: 0px !important;" id="js-${category}-catCompleted">15<span style="font-size: 1.5em; margin: 0px !important;">/</span><span id="js-${category}-catTotalTask" style="margin: 0px !important; font-size: 1em;">25</span></span>
 </div>
</div>
</div>
</div>
<button class="manage-cat" id="js-${category}-manageButton">
Manage
</button>
</div>`;

displayer.appendChild(newCategory);

  const catBody = document.getElementById(`js-${category}-body`);
  const showManager = document.getElementById(`js-${category}-manageButton`);
    
   
  
  

  const nameDiv = document.getElementById(`js-${category}-catName`);
  nameDiv.textContent = category; 
  
  const dateDiv = document.getElementById(`js-${category}-catDate`);
  dateDiv.textContent = 'Date Added: ' + date;

  const cancelDelete = document.querySelector('[data-cancelDelCat]');

  catBody.addEventListener('mouseover', ()=>{
    displayCatManager(`js-${category}-manageButton`);
  });

  newCategory.addEventListener('mouseleave',()=>{
    removeCatManager(`js-${category}-manageButton`);
  });

 newCategory.addEventListener('click',()=>{
  currentlySelected = document.getElementById( `js-${category}-catName`).textContent;
  console.log(currentlySelected);
  displayTasks(category);
 });

  showManager.addEventListener('click',()=>{
   addCatButton.classList.add('Add-cat-button-deactivated');
   setTimeout(()=>{ addCatButton.style.display = 'none';
   deleteCatManager.classList.add('deleteCat-activated'); },250);
     setTimeout(()=>{
          deleteCatManager.style.transition = 'opacity ease 200ms'
          deleteCatManager.style.opacity = '1';},450);
        });
   
}

function displayCategory(){
  for(let i = 0; i < fullArray.length; i++){
    const name = fullArray[i].catName;
    const color = fullArray[i].color;
    const date = fullArray[i].dateCreated;
    addOntoCat(name, color, date);
  }
}
function displayTasks(category){

}

let updateCategory = (category)=>{
  fullArray.push(category);
  localStorage.setItem('fullArray', JSON.stringify(fullArray));
  return console.log('Updated category');
}
function displayArray(){
  for(i = 0; i<fullArray.length; i++){
    console.log(fullArray[i]);
    console.log(typeof fullArray);
  }
  
}

//For adding a task I can just add the task to the taskArray by adding a separate localstorage item for each category to make the search easier instead of 

function colorSelector(color){
  const modal = document.getElementById('js-cat-modal-body');
  modalColor.style.marginTop = '0px';

  let colorValue = color.value;

    colorselec = colorValue;
  
  
  switch (colorValue){
    case "Blue":{
      modalColor.style.backgroundColor = 'rgba(0,153,255,.5)';
      color.style.color = 'yellow';
      modal.style.color = 'yellow';
      break;
  }
    case "Red":{
        
      modalColor.style.backgroundColor = 'rgba(255,0,0,.5)';
      color.style.color = 'white';
      modal.style.color = 'white';
      break;
  }
  case "Green":{

    modalColor.style.backgroundColor = 'rgba(24,145,52,.5)';
    color.style.color = 'white';
    modal.style.color = 'white';

    break;
  }
  case "Pink":{

    modalColor.style.backgroundColor = 'rgba(255,0,247,.4)';
    color.style.color = 'white';
    modal.style.color = 'white';

    break;
  }
  case "Gray":{
    modalColor.style.backgroundColor = 'rgba(102,99,99,.4)';
    color.style.color = 'white';
    modal.style.color = 'white';

    break;
  }

}

}


function displayCatManager(manageID){
  const manager = document.getElementById(String(manageID));
  manager.style.transition = 'all ease 500ms';
  manager.style.right = '20px';
  

}
function removeCatManager(manageID){
  const manager = document.getElementById(String(manageID));
  manager.style.right = '80px';
}


function findIndex(category){
  for(let i=0; i<fullArray.length; i++){
  
    if (category === fullArray[i].catName) {
      console.log(fullArray[i].catName + ', this is array index ' + i);
      return i;
  }
  
}
}
addCatButton = document.querySelector('[data-CatAddButton]');

console.log(addCatButton + 'LOL');

window.addEventListener("DOMContentLoaded",()=>{
  displayCategory();

  
  deleteCatManager = document.getElementById('js-deleteCatManager');
  cancelCatDelete = document.querySelector('[data-cancelDelCat]');
  deleteCatButton = document.getElementById('js-cat-deletor');

  catModal = document.getElementById('js-catModal');
  taskModal = document.getElementById('js-taskModal');

  modalColor = document.getElementById('js-modal-body-color');
  colorOption = document.getElementById('js-selected-color');

  const catModalOpener = document.getElementById('js-cat-openModal');
  const taskModalOpener = document.getElementById('js-task-openModal')
  const overlay = document.getElementById('screen-overlay');
  const cancelCatOverlay = document.getElementById('js-no-add-cat');
  const cancelTaskOverlay = document.getElementById('js-no-add-task');

  
  
  deleteCatButton.addEventListener('click',()=>{
    const category = document.getElementById(`js-${currentlySelected}`);
    category.remove();
    const index =  findIndex(currentlySelected);
    fullArray.splice(index,1);
    localStorage.setItem('fullArray',fullArray);
  });

  cancelCatDelete.addEventListener('click',()=>{
    deleteCatManager.style.opacity = '0';
    setTimeout(()=> {
      deleteCatManager.classList.remove('deleteCat-activated');
      addCatButton.classList.remove('Add-cat-button-deactivated');
      addCatButton.style.display = 'flex';
     },200);
    setTimeout(()=>{
      addCatButton.style.width = '100%';
    },450);
  });

  overlay.addEventListener('click', ()=>{
    overlay.classList.remove('activated')
    catModal.classList.remove('active');
    taskModal.classList.remove('active-task');
  });   

  catModalOpener.addEventListener('click', () => {catModal.classList.add('active'); console.log('lol'); document.getElementById('screen-overlay').classList.add('activated');});
  taskModalOpener.addEventListener('click', () => {taskModal.classList.add('active-task'); console.log('lol2'); document.getElementById('screen-overlay').classList.add('activated');});
  cancelCatOverlay.addEventListener('click',()=>{
    overlay.classList.remove('activated')
    catModal.classList.remove('active');
  });

  cancelTaskOverlay.addEventListener('click',()=>{
    overlay.classList.remove('activated')
    taskModal.classList.remove('active-task');
  });

  colorOption.addEventListener('click', ()=>colorSelector(colorOption));



  document.querySelector('header').innerHTML=`<div class="contain">
<a href="#" ><img src="images/task.png" class="offlogo"> <span class="titleName"> Taskify </span></a> 
 <button  class="js-changePfp workButton">
    <img src="images/Microzz.jpg" alt="Microzz dead" class="pfp">
   </button>
 
</div>`;

document.querySelector('.js-sidebar').innerHTML=`

<nav class="js-Nav" id="js-NavBody">
<div class="container">
<ul>

  <li>
    <div class="side-Button-Wrapper">
      <button class="bPosition" id="js-Side"><img src="images/category.svg"
          class="js-Category sideButtonIMG"></button>
      <a id="js-spanThing" class="name"><span> Categories </span></a>

    </div>
  </li>

  
  <li> <a href="Login.html">
      <div class="gridCategory">
        <img src="images/signin.png">
        <span class="name"> Login </span>
      
      </div>
      <hr>
    </a>
    
  </li>
  
  
 

  <li> <a href="Task.html">
      <div class="gridCategory" style="margin-top: 20px;">
        <img src="images/addT.jpg" alt="lol" id="fill-icon-task">
        <span class="name"> Tasks </span>
      </div>
    </a>
  </li>

  <li><a>
      <div class="gridCategory" >
        <img src="images/calendar.jpg">
        <span class="name"> Calendar </span>
      </div>
    </a>
  </li>

  </ul>
  <div class="logo" id="js-logo-placement">
  <a href="Dash part 1.html" class="js-position-Logo">
    
      <img src="images/task.png">
      <span class="name" id="xarveIsLegend"> Taskify </span>
      
    </a>
  </div>
    



</div>
</nav>`;

});

/*
<div class="full-cat-container" onmouseleave="removeCatManager('js-managebutton'); ">
          <div class="category" id="js-category-body" onmouseover="displayCatManager('js-managebutton');" >
            <div class="cat-color" id="js-choose-color">
            
            </div>
            <div class="Therest">
            <div class="cat-Name">
              <p style="font-size: 1.6em;" id="js-Insert-catName"> Dishes </p>
              <span id="js-Insert-catDate"> Date Added: 9/21/23 </span>
          </div>      
          <div class="task-progress">
            <div class="progress">
              <p> Completion </p>
                <div class="contain-bar-percent">
              <div class="progress-bar">
                <div class="coat-bar" id="js-Insert-catCoater">
                </div>

              </div>
              <p class="percent" id="js-Insert-catPercent"> 
                  90%
              </p>
            
            </div>

            </div>
            <div class="task-amount">
              <span style="margin: 0px !important;" > Completed:</span>
              <span style="margin: 0px !important;" id="js-Insert-catCompleted">15<span style="font-size: 1.5em; margin: 0px !important;">/</span><span id="js-Insert-catTotalTask" style="margin: 0px !important; font-size: 1em;">25</span></span>
            </div>
          </div>
        </div>
      </div>
      <button class="manage-cat" id="js-managebutton" >
        Manage
    </button>
  </div>*/