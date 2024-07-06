let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

let btn= document.getElementById("slideshow-button");
let hiddenDiv = document.getElementById("hidden-div");
let hiddenContainer = document.getElementById("hide");

btn.addEventListener("click",function(){
    if (hiddenDiv.style.display=="none"){
        btn.innerText="Hide Slideshow";
        hiddenDiv.style.display="flex";
        hiddenContainer.style.display="none";
    }

    else{
        btn.innerText="Show Slideshow";
        hiddenDiv.style.display="none";
        hiddenContainer.style.display="flex";
    }
})