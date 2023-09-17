let tScore = 0;
const impScore = 5;
const nScore = 3;










window.addEventListener("DOMContentLoaded", (event) => {
  console.log('Microzz is L bozo');

  setTimeout(()=>{document.getElementById('js-task-card').classList.add('task-card-enter'); console.log('lol');},5000);
  setTimeout(()=>{document.getElementById('js-task-card2').classList.add('task-card-enter2'); console.log('lol2');},5500);
  let i=0;
setInterval(()=>{if (i>9) clearInterval(); else{i++; console.log(i);}},1000);  
  

});