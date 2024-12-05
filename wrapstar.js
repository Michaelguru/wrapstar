
const structuredData = {
    "@context": "https://schema.org",
    "type": "Organization",
    "name": "Wrapstar",
    "url": "https://wrapstar.com.ng",
    "logo": "https://wrapstar.com.ng/images/Wrapstar logo.png"
};

const scriptTag = document.createElement("script");
scriptTag.type = "application/ld+json";
scriptTag.textContent = JSON.stringify(structuredData);

document.head.appendChild(scriptTag);












window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
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


function Invalid(){
    document.getElementById("InvalidCoupleCombo").innerText= "Sorry! No Couple Combo Yet.";
    
}
document.getElementById('orderNow').addEventListener("click", function(event){
    event.preventDefault();
})

function showMap(){
    document.getElementById("map").style.display = 'unset';
    document.getElementById("showMap").style.display = 'none';
    document.getElementById("hideMap").style.display = 'unset';
};

function hideMap(){
    document.getElementById("map").style.display = 'none';
    document.getElementById("showMap").style.display = 'unset';
    document.getElementById("hideMap").style.display = 'none';
};