let addCatButton = null;
let addTaskButton = null;

let catModal = null;
let taskModal = null;

let modalColor = null;
let colorOption = null;

let colorselec = null;

function colorSelector(color){
  console.log(changed + 'beginning of function');
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




window.addEventListener("DOMContentLoaded", (event)=>
{
  addCatButton = document.getElementById('js-open-cat-modal');
  addTaskButton = document.getElementById('js-open-task-modal');
   
  catModal = document.getElementById('js-catModal');
  taskModal = document.getElementById('js-taskModal');

  modalColor = document.getElementById('js-modal-body-color');
  colorOption = document.getElementById('js-selected-color');


  addCatButton.addEventListener('click', () => {catModal.classList.add('active'); console.log('lol'); document.getElementById('screen-overlay').classList.add('activated');});
  addTaskButton.addEventListener('click', () => {taskModal.classList.add('active-task'); console.log('lol2'); document.getElementById('screen-overlay').classList.add('activated');});

  colorOption.addEventListener('click', ()=>colorSelector(colorOption));


});