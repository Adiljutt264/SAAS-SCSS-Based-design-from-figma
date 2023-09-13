function setupHoverEffects() {
    // Get all the parent elements with class "capabilites-desktop_childf"
    const parentElements = document.querySelectorAll('.cards__child');
  
    // Loop through each parent element
    parentElements.forEach(parentElement => {
      // Getting the child SVG element inside the parent
      const svgElement = parentElement.querySelector('svg');
      const wrapperElement = parentElement.querySelector(".cards__content__holder");
      const innerElement = parentElement.querySelector(".cards__wrapper");
  
      // Added a "mouseover" event listener to the parent
      parentElement.addEventListener('mouseover', () => {
        // Added the "display-hide" class to hide the SVG element
        svgElement.classList.toggle('visibility-hidden');
        wrapperElement.classList.remove('display-hidden');
        innerElement.classList.add('shrink');
      });
  
      // Added a "mouseout" event listener to the parent
      parentElement.addEventListener('mouseout', () => {
        // Removes the "display-hide" class to show the SVG element
        svgElement.classList.remove('visibility-hidden');
        wrapperElement.classList.add('display-hidden');
        innerElement.classList.remove('shrink');
      });
    }); 
  }
  
  // Execute the function when the page is fully loaded
  document.addEventListener('DOMContentLoaded', setupHoverEffects);

  const openPopupButtons = document.querySelectorAll(".openPopupBtn");
openPopupButtons.forEach(button => {
  button.addEventListener("click", function () {
    popup.style.display = "flex";
  });
});
    const closePopupBtn = document.getElementById("closePopupBtn");
    const popup = document.getElementById("popup");
    closePopupBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });