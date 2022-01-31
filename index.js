
const navtoggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navtoggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
})

navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show');
})

const navLink = document.querySelectorAll('.nav-link');



 navLink.forEach(n=> n.addEventListener('click',()=>{
    navMenu.classList.remove('show');
 }))






const section = document.querySelectorAll('section[id]');
 

window.addEventListener('scroll',scrollActive);

  function scrollActive(){
      const scrollY = window.pageYOffset;
       section.forEach(current => {
           const sectionHeight = current.offsetHeight;
           const sectionTop = current.offsetTop-50
           sectionId = current.getAttribute('id');
            
           if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
               document.querySelector('.nav-menu a[href*='+sectionId+']').classList.add('active');
           }
           else{
            document.querySelector('.nav-menu a[href*='+sectionId+']').classList.remove('active');
           }
       })
  }

  


   