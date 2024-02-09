let count = 0;
let targetCount = 0;

function startTasbeeh() {
    targetCount = parseInt(prompt("Enter the number of times you want to do Dhikr:"));
    if (!isNaN(targetCount)) {
        localStorage.setItem('targetCount', targetCount); // Store targetCount in local storage
        window.location.href = "counter.html"; // Redirect to counter page
    }
}

function getTargetCountFromStorage() {
    return parseInt(localStorage.getItem('targetCount'));
}

function startCounter() {
    targetCount = getTargetCountFromStorage();
    if (!isNaN(targetCount)) {
        updateCounter();
    }
}

function incrementCounter() {
    if (count < targetCount) {
        count++;
        updateCounter();
    }

    if (count === targetCount) {
        showCompletionMessage();
    }
}

function resetCounter() {
    // Clear existing message when resetting
    const messageContainer = document.getElementById('message');
    messageContainer.innerText = '';

    // Reset the counter
    count = 0;
    updateCounter();

    // Check if the counter has been completed before, if yes, show the completion message again
    if (count === targetCount) {
        showCompletionMessage();
    }
}


function updateCounter() {
    document.getElementById('counter').innerText = count;
    document.getElementById('count-button').innerText = `Count (${count}/${targetCount})`;
    document.getElementById('reset-button').innerText = 'Reset';

    generateBeads(count);
}

function generateBeads(count) {
    const beadsContainer = document.getElementById('beads-container');
    beadsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const bead = document.createElement('div');
        bead.classList.add('bead');
        beadsContainer.appendChild(bead);
    }
}

function showCompletionMessage() {
    const messageContainer = document.getElementById('message');
    messageContainer.innerText = "MashaAllah! You've completed your Dhikr.";
}
