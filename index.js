let tabbox = document.querySelector(".tabbox");
let arrowicons = document.querySelectorAll(".icon i");
let tab =  document.querySelectorAll(".tab");
console.log(tab);


tab.forEach((items)=>{
   items.addEventListener("click", function(){
    tab.forEach((items)=>{
   items.classList.remove("active");
   this.classList.add("active");
    })
   })
})

arrowicons.forEach((icon)=>{
   icon.addEventListener("click", function(){
      tabbox.scrollLeft += icon.id === "left" ? -150 : 150;
      console.log(icon.id);
   })
})
tabbox.addEventListener("mousemove", function(e){
   tabbox.scrollLeft -= e.movementX;
  
})