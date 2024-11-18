window.onload = function() {
    document.querySelector(".loader").style.display = "none"
}
document.getElementById("searchButton").addEventListener("click", function() {
const query = document.getElementById("searchInput").value.toLowerCase();
const menuItems = document.querySelectorAll(".menu-item");
const menuList = document.getElementById("menuList");
const noResults = document.getElementById("noResults");

let hasResults = false;

menuItems.forEach (item => {
    if(item.textContent.toLowerCase().includes(query)) {
        item.style.display = "block";
        hasResults = true;
    } else{
        item.style.display = "none"
    }
});
if(hasResults) {
    menuList.style.display = "block";
    noResults.style.display = "none";
} else{
    menuList.style.display = "none";
    noResults.style.display = "block";
    noResults.textContent = ` No results found for your search! This might be due to incorrect spelling or "${query}" isn't currently on the list`
}
});


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



function sendOrder(){
    const phoneNumber = "2349157684983"; 
    const selectedItems = [];

    // Collect selected items
    if (document.getElementById("SingleChicken").checked) selectedItems.push("Single Chicken Burger");
    if (document.getElementById("DoubleChicken").checked) selectedItems.push("Double Chicken Burger");
    if (document.getElementById("SingleBeef").checked) selectedItems.push("Single Beef Burger");
    if (document.getElementById("DoubleBeef").checked) selectedItems.push("Double Beef Burger");
    if (document.getElementById("BeefSuya").checked) selectedItems.push("Beef Suya Burger");

    if (document.getElementById("FriesAndChicken").checked) selectedItems.push("Fries and Chicken");
    if (document.getElementById("BeefKebab").checked) selectedItems.push("Beef Kebab");
    if (document.getElementById("FriesCombo").checked) selectedItems.push("Fries Combo");
    if (document.getElementById("ExtraFries").checked) selectedItems.push("Extra Fries");
    if (document.getElementById("ExtraChicken").checked) selectedItems.push("Extra Chicken");
    if (document.getElementById("ExtraSausage").checked) selectedItems.push("Extra Sausage");
    if (document.getElementById("ExtraBeef").checked) selectedItems.push("Extra Beef");

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