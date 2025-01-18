

function checkFollow(platform) {
    if (platform === 'instagram') {
        document.getElementById('instagramFollow').checked = true;
    } else if (platform === 'tiktok') {
        document.getElementById('tiktokFollow').checked = true;
    }
}

document.getElementById('wrapstarForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const menuWords = document.getElementById('Words').value.trim();
    if (!menuWords) {
        alert('Please fill out the text area!');
        return;
    }

    const instagramFollowed = document.getElementById('instagramFollow').checked;
    const tiktokFollowed = document.getElementById('tiktokFollow').checked;
    if (!instagramFollowed || !tiktokFollowed){
        alert('Please follow wrapstar on both Instagram and Tiktok to continue!');
        return;
    }

    const whatsappNumber = "2349157684983";
    const whatsappMessage = `Here are the words I found: ${menuWords}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});