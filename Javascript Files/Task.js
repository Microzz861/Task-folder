









window.addEventListener("DOMContentLoaded", (event) => {

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