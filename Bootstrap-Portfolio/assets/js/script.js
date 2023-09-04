  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides_");
    let dots = document.getElementsByClassName("dot_");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active_";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }