function setupHoverEffects(){document.querySelectorAll(".cards__child").forEach((e=>{const t=e.querySelector("svg"),o=e.querySelector(".cards__content__holder"),s=e.querySelector(".cards__wrapper");e.addEventListener("mouseover",(()=>{t.classList.toggle("visibility-hidden"),o.classList.remove("display-hidden"),s.classList.add("shrink")})),e.addEventListener("mouseout",(()=>{t.classList.remove("visibility-hidden"),o.classList.add("display-hidden"),s.classList.remove("shrink")}))}))}document.addEventListener("DOMContentLoaded",setupHoverEffects);const openPopupButtons=document.querySelectorAll(".openPopupBtn");openPopupButtons.forEach((e=>{e.addEventListener("click",(function(){popup.style.display="flex"}))}));const closePopupBtn=document.getElementById("closePopupBtn"),popup=document.getElementById("popup");closePopupBtn.addEventListener("click",(function(){popup.style.display="none"}));