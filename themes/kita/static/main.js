const coin = document.getElementById("coin");
let currentAngle = 0;

function flipCoin() {
    let isHeads = Math.random() > 0.5;
    let flips = 3; // number of full spins before result
    let angle = flips * 360 + (isHeads ? 0 : 180);

    coin.style.transition = "none";
    coin.style.transform = `rotateY(${currentAngle}deg)`;

    void coin.offsetWidth;

    coin.style.transition = "transform 1s ease-in-out";

    coin.style.transform = `rotateY(${angle}deg)`;

    currentAngle = isHeads ? 0 : 180;
}

coin.addEventListener("click", flipCoin);
window.addEventListener("load", () => {
    setTimeout(flipCoin, 300);
});