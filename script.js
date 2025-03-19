//Make the FAQ an accordian style
/*Make destination pictures scroll horizantal
 with left and right arrows 
*/
//making a booking form
//make each section dynamically click


window.alert("Welcome to GlobaTrek Getaways")

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides_fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

let answers = document.querySelectorAll("h4");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});


const acc = document.getElementsByClassName("faq_question");
let i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let booknow = document.getElementById("book_now")
booknow.innerText = "Book Vacation"

document.addEventListener("DOMContentLoaded", function () {
  let visaContainer = document.getElementById("visa_link");

  let visaButton = document.createElement("button");
  visaButton.textContent = "Go to Visa Information"; 
  visaButton.style.backgroundColor = "#FE7F2D";
  visaButton.style.borderRadius = "5px";
  visaButton.style.padding = "7px";
  visaButton.style.color = "#233D4D"

  visaButton.addEventListener("click", function () {
    event.preventDefault();
    window.open("https://travel.state.gov/content/travel/en/us-visas.html", "_blank"); 
    visaButton.innerText = "Taking you the State Department Website"
    
  });

  visaContainer.appendChild(visaButton);
});
