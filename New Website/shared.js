var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal_action_negative")
var selectPlanButton = document.querySelectorAll('.article button');
var togglebutton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')
var  ctaButton = document.querySelector ('.special-nav');


for (var i = 0; i < selectPlanButton.length; i++)  { 
    selectPlanButton[i].addEventListener("click", function() {
      //modal.style.display = "block";
      //backdrop.style.display = "block";
      //modal.className = 'open';  
      modal.classList.add("open"); 
      backdrop.classList.add("open"); 
    });
} 

    backdrop.addEventListener("click", function() {
    //mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
modalNoButton.addEventListener("click", closeModal)
}

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

togglebutton.addEventListener("click",function() {
    mobileNav.style.display = "block";
    backdrop.style.display = "block"
});

ctaButton.addEventListener('animationstart', function (event){
    console. log('Animation started', event);
})

ctaButton.addEventListener('animationend', function (event){
    console. log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function (event){
    console. log('Animation iteration', event);
})