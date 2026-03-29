const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const video = document.getElementById("video");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
    video.src = "yes.mp4";
    result.innerText = "I knew it 😍💖";
});


function moveButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}


noBtn.addEventListener("mouseover", moveButton);


noBtn.addEventListener("touchstart", moveButton);
const heartsContainer = document.querySelector(".hearts");

let heartInterval; 

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const emojis = ["❤️","💖","💕","💖"];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

yesBtn.addEventListener("click", () => {
    video.src = "yes.mp4";
    result.innerText = "I knew it 😍💖";

    
    if (!heartInterval) {
        heartInterval = setInterval(createHeart, 300);
    }
});