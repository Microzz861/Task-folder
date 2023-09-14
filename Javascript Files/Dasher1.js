


let compPercent = 0;
let incompPercent = 0;
let pendPercent = 0;


let completeCount = 12;
let incompleteCount = 15;
let pendingCount = 17;

const PI = 3.14;
const circumference = 2 * PI * 73.5;

function calcSumTasks(complete, incomplete, pend)
{
  let sum = Number(complete + incomplete + pend);
  compPercent = (complete / sum) * 100;
  incompPercent = (incomplete / sum) * 100;
  pendPercent = (pend / sum) * 100;

  return sum;
}

let AllTasks = calcSumTasks(12,15,17);


function strokeChange(SVG , percent, Number , taskNum , count )
{
  const stroker = circumference * ((100 - percent)/ 100);

  SVG.classList.add('filler');
  SVG.style.strokeDashoffset = stroker;

  const smallPerc = parseInt(percent);
  console.log(typeof smallPerc);
  taskNum.innerHTML = count;
  let i=0;
    setInterval(()=> {
      
      if(i === smallPerc) clearInterval();
        else{
              Number.innerHTML = `${i}%`; 
               i++;
            }}
        
    ,50);

    
  
  }
 


window.addEventListener("DOMContentLoaded", (event) => {
  const incompletedSVG = document.getElementById('js-icircle');
  const incompletePercent = document.getElementById('js-ipercent');
  const incomTaskNumber = document.getElementById('js-complete-amount');

  strokeChange(incompletedSVG, incompPercent, incompletePercent, incomTaskNumber, incompleteCount);

  const completedSVG = document.getElementById('js-ccircle');
  const completePercent = document.getElementById('js-cpercent');
  const comTaskNumber = document.getElementById('js-incomplete-amount');

  strokeChange(completedSVG, compPercent, completePercent, comTaskNumber, completeCount);

  const pendingSVG = document.getElementById('js-pcircle');
  const pendingPercent = document.getElementById('js-ppercent');
  const pendTaskNumber = document.getElementById('js-pending-amount');

  strokeChange(pendingSVG, pendPercent, pendingPercent, pendTaskNumber, pendingCount);

  const totalTask = document.getElementById('js-total');
  totalTask.innerHTML = AllTasks; 

});

