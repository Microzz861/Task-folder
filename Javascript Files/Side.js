let stretched = false;
let color= false;
let Button;


window.addEventListener("DOMContentLoaded", (event) => {
   Button = window.document.getElementById('js-Side');
    
  Button.addEventListener('click',()=>{

  if(stretched === false)
  {
    

    document.querySelector('.js-Nav').style.transition = 'width .5s ease';
    document.querySelector('.js-Nav').classList.add('nav-Full');

    setTimeout(()=>{
      document.querySelector('.js-Nav').style.transition = 'height .5s ease, opacity .5s ease';
      addH();


    },500);

    setTimeout(()=>document.getElementById('js-logo-placement').style.display="inliblock",740);
    

    if(window.document.querySelector('.side-Button-Effect2')){     
      document.querySelector('.js-Category').classList.remove('side-Button-Effect2');
      console.log('workedwithremove2');
    }

    document.querySelector('.js-Category').classList.add('side-Button-Effect1');
    document.getElementById('js-spanThing').innerHTML='Close Sidebar';
    stretched = true;
  }

  else if(stretched === true)
  {

    document.querySelector('.js-Nav').style.transition = 'width .5s ease';
    document.querySelector('.js-Nav').classList.remove('nav-Full');

    setTimeout(()=>{ 
    document.getElementById('js-logo-placement').style.display="none";}
    ,500);
   /*
  
      document.querySelector('.js-Nav').style.height='6%';
      */
  
      setTimeout(()=>{ 
        document.querySelector('.js-Nav').style.transition = 'height .5s ease';
    
        removeH();
        setTimeout(() => {
          document.getElementById('js-logo-placement').style.display="none";
      
         }, 50);
      },500);
    if(window.document.querySelector('.side-Button-Effect1')){     
      document.querySelector('.js-Category').classList.remove('side-Button-Effect1');
      console.log('workedwithremove1');
    }
    
    document.querySelector('.js-Category').classList.add('side-Button-Effect2');
    document.getElementById('js-spanThing').innerHTML='Closing';

    stretched = false;
  }
  return console.log('worked');
  });
});


window.addEventListener("DOMContentLoaded", (event) => {
  Link = window.document.getElementById('js-spanThing');
   
 Link.addEventListener('click',()=>{

 if(stretched === false)
 {
  document.querySelector('.js-Nav').style.transition = 'width .5s ease';
    document.querySelector('.js-Nav').classList.add('nav-Full');

    

   setTimeout(()=>{
    document.querySelector('.js-Nav').style.transition = 'height .5s ease, opacity .5s ease';
    addH(); 
   },500);
   window.document.querySelector('.js-Nav').style.opacity='.1';       
   setTimeout(()=>document.getElementById('js-logo-placement').style.display="flex",740);

   if(window.document.querySelector('.side-Button-Effect2')){     
     document.querySelector('.js-Category').classList.remove('side-Button-Effect2');
     console.log('workedwithremove2');
   }

   document.querySelector('.js-Category').classList.add('side-Button-Effect1');
   document.getElementById('js-spanThing').innerHTML='Close Sidebar';
   stretched = true;
 }

 else if(stretched === true)
 {
  document.querySelector('.js-Nav').style.transition = 'width .5s ease';
  document.querySelector('.js-Nav').classList.remove('nav-Full');

 /*
 setTimeout(()=>{ document.querySelector('.js-Nav').style.transition = 'width .5s ease';
  },500);
setTimeout(()=>{document.querySelector('.js-Nav').style.transition = 'width .5 ease';
  },500);
    document.querySelector('.js-Nav').style.height='6%';
    */

  setTimeout(()=>{ 
    document.querySelector('.js-Nav').style.transition = 'height .5s ease';

    removeH();
    setTimeout(() => {
      document.getElementById('js-logo-placement').style.display="none";
      
     }, 50);
  },500);

   

   if(window.document.querySelector('.side-Button-Effect1')){     
     document.querySelector('.js-Category').classList.remove('side-Button-Effect1');
     console.log('workedwithremove1');
   }
   
   document.querySelector('.js-Category').classList.add('side-Button-Effect2');
   document.getElementById('js-spanThing').innerHTML='Closing';

   stretched = false;
 }
 return console.log('worked');
 });
});

const addH = ()=>{document.querySelector('.js-Nav').classList.add('height-Resize'); console.log('Added H');};
const removeH = ()=>{document.querySelector('.js-Nav').classList.remove('height-Resize'); console.log('Removed H');};

/*
let BGCOLOR;
window.addEventListener("DOMContentLoaded", (event) => {
BGCOLOR = document.getElementById('activateColor');
BGCOLOR.addEventListener('click',
()=>{
  if(!color)
  {
  document.getElementById('js-NavBody').classList.add('themeZig');
  document.getElementById('xarveIsLegend').style='color:blue';
  color = true;
  
  }
else if(color)
{
  document.getElementById('js-NavBody').classList.remove('themeZig');
  color = false;
  document.querySelector('.name').style='color:black';

}
  })
});*/