let clicks = 0;
const button = document.getElementById('clickMe');
const display = document.getElementById('clickCount');
const reset_button = document.getElementById('clickReset')
const display_reset = document.getElementById('clickResetting');

button.addEventListener('click', () => {
    clicks++;
    display.textContent = `Button clicks: ${clicks}`;
});

reset_button.addEventListener('click', () => {
    clicks = 0;
    display.textContent = `Button clicks: ${clicks}`;
    display_reset.textContent = 'counter has been reset';
});


