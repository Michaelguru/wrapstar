


document.getElementById("request-text").innerHTML = `Request payment<br>From Your Friend or partner`;
const companyWhatsAppNumber = "2349157684983";
const itemPrice = document.getElementById("itemPrice").textContent;

function updateTotal() {
    let quantity = document.getElementById("quantity").value;
    let total = itemPrice * quantity;
    document.getElementById("totalPrice").textContent = total;
}

function shareWebsite() {
    const name = document.getElementById("nameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const inputField = document.getElementById("input-field");
    const quantity = document.getElementById("quantity").value;
    const total = itemPrice * quantity;
    const item = document.getElementById("itemName").textContent;

    
    if (!name || !phone){
        inputField.style.display = 'block';
        return;
    }




    const shareData = {
        title: "Pay 4 Me",
        text: "Hey, this is the season of love, how about you prove your love for me by paying for my order 👩🏾‍❤️‍💋‍👨🏽❤️? Click the link below!",
        url: `${window.location.href}?pay_request=true&name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&item=${encodeURIComponent(item)}&quantity=${quantity}&total=${total}`
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log("Shared successfully"))
            
            .catch((error) => console.log("Sharing failed", error));
            
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareData.url).then(() => {
            alert("Link copied to clipboard!");
        }).catch(err => {
            console.log("Copy failed", err);
        });
    }
}

// Check if the shared link has the "pay_request" parameter
function checkPayRequest() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('pay_request')) {
        const name = urlParams.get("name") || "Me";
        const phone = urlParams.get("phone") || "";
        const item = urlParams.get("item") || "item";
        const quantity = urlParams.get("quantity") || "1";
        const total = urlParams.get("total") || "0";

        document.getElementById("payForMeBtn").style.display = "none";
        document.getElementById("buyNow").style.display = 'none';

        document.getElementById("totalPrice").textContent = total;
        const input = document.getElementById("quantity");

        
        input.value = quantity;
        
        const payNowBtn = document.getElementById("payNowBtn");
        payNowBtn.style.display = "inline-block";
        payNowBtn.textContent = `Pay for ${decodeURIComponent(name)}`;
        document.getElementById("request-text").innerHTML = `Don't disappoint ${name} by <br> not clicking that "Pay" Button.`

        payNowBtn.onclick = function() {
            const message = `Hello👋, I want to pay for ${decodeURIComponent(name)}.\n
            Item: ${decodeURIComponent(item)}\n
            Quantity: ${quantity}\n
            Total Price: N${total}\n
            Their phone number is ${decodeURIComponent(phone)}.`;
            const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=${encodeURIComponent(message)}`;
            window.location.href = whatsappUrl;
        }

        
    }
}

window.onload = checkPayRequest;

function sendWhatsAppMessage() {
    const quantity = document.getElementById("quantity").value;
    const total = itemPrice * quantity;
    const item = document.getElementById("itemName").textContent;
    const phoneNumber = "2349157684983";

    let message = `Hello! I would like to order: 
    ${item}\n
    Quantity: ${quantity}\n
    Total Price: N${total}`;

    // WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    window.open(url, '_blank');
}

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