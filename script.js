// Puppy Testimonies
const testimonies = [
    "I couldn't have eaten the cookies! I was in the bathroom pooping actual rainbows! 🌈 Then I had to shower because I got rainbow splatter all over my fur!",
    "No way I did it! I was chasing my tail for HOURS! Got so dizzy I puked rainbows myself! 🌈",
    "I was making a healthy tomato smoothie in the kitchen! What? These crumbs? Uhh... must be from whole wheat toast!",
    "I was napping the whole time! Snored so loud the neighbors complained. Didn't even smell cookies!"
];

// Guilty puppy is Rocky (ID 3)
const guiltyPuppyId = 3;

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
    // Start button
    document.getElementById('start-btn').addEventListener('click', function() {
        hideAllScreens();
        showScreen('suspect1-screen');
        typeText('suspect1-text', testimonies[0]);
    });

    // Next buttons
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`next${i}-btn`);
        if (btn) {
            btn.addEventListener('click', function() {
                hideAllScreens();
                if (i < 4) {
                    showScreen(`suspect${i+1}-screen`);
                    typeText(`suspect${i+1}-text`, testimonies[i]);
                } else {
                    showScreen('accusation-screen');
                }
            });
        }
    }

    // Suspect selection
    document.querySelectorAll('.suspect-card[data-id]').forEach(card => {
        card.addEventListener('click', function() {
            const selectedId = parseInt(this.dataset.id);
            const isCorrect = selectedId === guiltyPuppyId;
            
            const verdictText = isCorrect 
                ? `CORRECT! 🎉 Rocky was making a "smoothie" with cookie crumbs!` 
                : `Nope! ${this.querySelector('h3').textContent} is innocent. The thief was in the KITCHEN!`;
            
            document.getElementById('verdict-text').textContent = verdictText;
            document.getElementById('verdict').classList.remove('hidden');
        });
    });

    // Restart button
    document.getElementById('restart-btn').addEventListener('click', function() {
        location.reload();
    });
});

// Helper functions
function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
}

function showScreen(id) {
    document.getElementById(id).classList.remove('hidden');
}

function typeText(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    element.style.animation = 'none';
    void element.offsetWidth; // Trigger reflow
    element.textContent = text;
    element.style.animation = 'typing 3s steps(40, end)';
}