if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./Task');
}

if(localStorage.getItem('catArray') === null) localStorage.setItem('catArray', '[]');

  
class Task{
  static score = 5;
  
  constructor(Name,Description,taskDateCreated,DueDate,completion){
    this.Name = Name;
    this.Description = Description;
    this.taskDateCreated = taskDateCreated;
    this.DueDate= DueDate ;
    this.completion = completion; //default value is false if not specified in constructor
  }

    get Tasks(){
      return this.displayTask();
    }
    displayTask(){
    return this.Name;
  }
}
const catArray = [];

 
let catOBJ = {
  catName:'',
  dateCreated:'',
  Tasks:[],
  color:'',
  taskCounter:0,
  catScore:0,
  completedTasks:0,
}



console.log('The thing ' + Task.score);

let task1 = new Task('Dishes','Clean the dishes', '28/9/2023', '29/9/2023',0);

console.log(task1.Tasks);
 
 
 
let catModal = null;
let taskModal = null;


let modalColor = null;
let colorOption = null;

let colorselec = null;




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





window.addEventListener("DOMContentLoaded", (event) => {
  catModal = document.getElementById('js-catModal');
  taskModal = document.getElementById('js-taskModal');

  modalColor = document.getElementById('js-modal-body-color');
  colorOption = document.getElementById('js-selected-color');

  const catModalOpener = document.getElementById('js-cat-openModal');
  const taskModalOpener = document.getElementById('js-task-openModal')
  const overlay = document.getElementById('screen-overlay');
  const cancelCatOverlay = document.getElementById('js-no-add-cat');
  const cancelTaskOverlay = document.getElementById('js-no-add-task');


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

