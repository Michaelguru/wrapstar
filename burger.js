window.onload = function(){
    document.querySelector('.loader').style.display= 'none';
};

document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});


let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

// Optional: Auto-change slides
setInterval(() => {
  changeSlide(1);
}, 5000);

function SingleChicken(){
    document.getElementById('response').innerText= "Order 'Single Chicken' Here!"
}
function DoubleChicken(){
    document.getElementById('response').innerText= "Order 'Double Chicken' Here!"
}function SingleBeef(){
    document.getElementById('response').innerText= "Order 'Single Beef' Here!"
}function DoubleBeef(){
    document.getElementById('response').innerText= "Order 'Double Beef' Here!"
}function BeefSuya(){
    document.getElementById('response').innerText= "Order 'Beef Suya Burger' Here!"
}


function sendWhatsAppMessage() {
    const phoneNumber = "2349157684983"; // Replace with the recipient's WhatsApp number
    const selectedItems = [];

    // Collect selected items
    if (document.getElementById("SingleChicken").checked) selectedItems.push("Single Chicken Burger");
    if (document.getElementById("DoubleChicken").checked) selectedItems.push("Double Chicken Burger");
    if (document.getElementById("SingleBeef").checked) selectedItems.push("Single Beef Burger");
    if (document.getElementById("DoubleBeef").checked) selectedItems.push("Double Beef Burger");
    if (document.getElementById("BeefSuya").checked) selectedItems.push("Beef Suya Burger");


    //check if any items are selected
    if (selectedItems.length === 0) {
        alert("Please select at least one item to order.");
        return;
    }
    // Build the message
    let message = "Hello! I would like to order: ";
     message += selectedItems.join(", ");

    // WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    window.open(url, '_blank');
}