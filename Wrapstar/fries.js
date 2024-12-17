window.onload= function(){
    document.querySelector('.loader').style.display= 'none'
}

document.addEventListener('DOMContentLoaded', function(){
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver (function(entries, observer){
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },options);
    sections.forEach(section =>{
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

function FriesAndChicken(){
    document.getElementById('response').innerText= "Order 'Fries and Chicken' Here!"
}
function BeefKebab(){
    document.getElementById('response').innerText= "Order 'Beef Kebab' Here!"
}function FriesCombo(){
    document.getElementById('response').innerText= "Order 'Fries Combo' Here!"
}function ExtraFries(){
    document.getElementById('response').innerText= "Order 'Extra Fries' Here!"
}function ExtraChicken(){
    document.getElementById('response').innerText= "Order 'Extra Chicken' Here!"
}function ExtraSausage(){
    document.getElementById('response').innerText= "Order 'Extra Sausage' Here!"
}
function ExtraBeef(){
    document.getElementById('response').innerText= "Order 'Extra Beef' Here!"
}


function sendWhatsAppMessage() {
    const phoneNumber = "2349157684983"; // Replace with the recipient's WhatsApp number
    const selectedItems = [];

    // Collect selected items
    if (document.getElementById("FriesAndChicken").checked) selectedItems.push("Fries and Chicken");
    if (document.getElementById("BeefKebab").checked) selectedItems.push("Beef Kebab");
    if (document.getElementById("FriesCombo").checked) selectedItems.push("Fries Combo");
    if (document.getElementById("ExtraFries").checked) selectedItems.push("Extra Fries");
    if (document.getElementById("ExtraChicken").checked) selectedItems.push("Extra Chicken");
    if (document.getElementById("ExtraSausage").checked) selectedItems.push("Extra Sausage");
    if (document.getElementById("ExtraBeef").checked) selectedItems.push("Extra Beef");


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