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


function ChickenAlone(){
    document.getElementById('response').innerText= "Order 'Chicken Alone' Here!"
}
function BeefAlone(){
    document.getElementById('response').innerText= "Order 'Beef Alone' Here!"
}function ChickenAndHotdog(){
    document.getElementById('response').innerText= "Order 'Chicken And Single Hotdog' Here!"
}function ChickenAndBeef(){
    document.getElementById('response').innerText= "Order 'Chicken And Beef' Here!"
}function ChickenAndDoubleHotdog(){
    document.getElementById('response').innerText= "Order 'Chicken And Double Hotdog' Here!"
}function ChickenBeef(){
    document.getElementById('response').innerText= "Order 'Chicken Beef and Double Hotdog' Here!"
}
function ShawarmaSpecial(){
    document.getElementById('response').innerText= "Order 'Shawarma Special' Here!"
}


function sendWhatsAppMessage() {
    const phoneNumber = "2349157684983"; // Replace with the recipient's WhatsApp number
    const selectedItems = [];

    // Collect selected items
    if (document.getElementById("ChickenAlone").checked) selectedItems.push("Chicken Alone Shawarma");
    if (document.getElementById("BeefAlone").checked) selectedItems.push("Beef Alone Shawarma");
    if (document.getElementById("ChickenAndHotdog").checked) selectedItems.push("Chicken and Single Hotdog Shawarma");
    if (document.getElementById("ChickenAndBeef").checked) selectedItems.push("Chicken and Beef Shawarma");
    if (document.getElementById("ChickenAndDoubleHotdog").checked) selectedItems.push("Chicken and Double Hotdog Shawarma");
    if (document.getElementById("ChickenBeef").checked) selectedItems.push("Chicken Beef and Double Hotdog Shawarma");
    if (document.getElementById("ShawarmaSpecial").checked) selectedItems.push("Shawarma Special");


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