!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),function(){const e=document.getElementById("background-block");document.querySelectorAll(".hover-button").forEach((t=>{t.addEventListener("mouseover",(function(){const t=this.getAttribute("data-image");e.style.backgroundImage=t}))}))}()}();
