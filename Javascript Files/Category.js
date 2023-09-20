let tScore = 0;
const impScore = 5;
const nScore = 3;
let count = 6;
let tasked = false;// The tasked has to be an attr with an obj to make  each obj/category have   it's own state of list
let intcount = 0;





function getCatTasks(catID){
  const tList = document.createElement('ul');

  
  console.log(tasked);

  if(tasked === true){ 

    const int = setInterval(()=>{ 
      if(intcount > 6){

      clearInterval(int);
      document.getElementById('LIST').remove();
      console.log('tasked is ' + tasked);     
      tasked = false;
 } 
    else
    {
      intcount++; 
     
      catID.querySelector('.task-card').classList.remove('task-card-enter');
      catID.querySelector('.task-card').remove();
      
         
      
      console.log(intcount);

  }
  },10);
  }

  else if(tasked === false){
  //without node.createElement/fragment
  tList.style.maxHeight='100%';
  tList.style.display='block';
  tList.style.transition = 'height ease .5s';
  tList.style.flexDirection='columns';
  tList.id='LIST';

  


  let taskString = '';
  let i=0;
  let c=6;
  setInterval(()=>
  {
    if(i>c) clearInterval();
    else{
      const tItem = document.createElement('li');
      tItem.style.display='block';
      tItem.style.width='100%';


      tItem.innerHTML=
      taskString= `<div class="task-card" id="js-task-card">
      <div class="cat-name">  
        <p class="pCategory-task"> Insert Name </p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
          <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
          <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
          </svg>
          <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
      </div>
      `;
      tList.appendChild(tItem);
      document.getElementById('js-cat-task-cat').appendChild(tList);
      
      let interval=0;
     const int1 = setInterval(()=>{ if(interval>count){ clearInterval(int1); tasked = true;} else
      {
      document.getElementById('js-cat-task-cat').
      querySelectorAll('.task-card').
      forEach((Node)=>Node.classList.add('task-card-enter'));
      interval++; 
    }},10);


      i++;
    //  console.log(taskString);
    }
  },650);
//document.getElementById('js-task-card').clastList.add('task-card-enter'); 
  console.log(tList);
  console.log(tasked);
  
  i=0;
  
  return true;
  
}
return console.log(tasked);
}



window.addEventListener("DOMContentLoaded", (event) => {
  console.log('Microzz is L bozo');

  console.log('lol');
  //setTimeout(()=>{document.getElementById('js-task-card2').classList.add('task-card-enter2'); console.log('lol2');},5500);
  let i=0;
  //setInterval(()=>{if (i>9) clearInterval(); else{i++; console.log(i);}},1000);  
  


});
/*
 <div class="task-card task-card-enter" id="js-task-card">
        <div class="cat-name">
          <p class="pCategory-task"> Insert Name </p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
            <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
            <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
            </svg>
            <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
        </div>
      </div>
        <div class="task-card2" id="js-task-card2">
          <div class="cat-name">
            <p class="pCategory-task"> Insert Name </p>
            <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
              <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
              <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
              </svg>
              <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
          </div>
       </div>
*/