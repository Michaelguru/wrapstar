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