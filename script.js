// Countdown Timer Script
const countdownDate = new Date("March , 2025 12:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
    } else {
        document.getElementById("countdown").innerHTML = "C'est le jour de l'ouverture!";
        clearInterval(countdownInterval); // Stop the interval
    }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Confetti function
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '-10';
    confettiContainer.style.opacity = '0.5';
    document.body.appendChild(confettiContainer);

    const colors = ['#FFC107', '#E91E63', '#9C27B0', '#4CAF50', '#2196F3', '#FFEB3B', '#FF5722'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 30 + 5}px`;
        confetti.style.height = `${Math.random() * 30 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = `${Math.random() * 100}%`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 1 + 4}s linear infinite`;
        confettiContainer.appendChild(confetti);
    }
}

// Start the confetti effect when the page loads
window.onload = () => {
    createConfetti();
};
