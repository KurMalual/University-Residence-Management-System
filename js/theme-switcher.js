// theme-switcher.js

function switchTheme() {
    const darkThemeCss = document.getElementById('dark-theme-css');
    const themeText = document.getElementById('theme-text');
    
    if (darkThemeCss.disabled) {
        darkThemeCss.disabled = false;
        localStorage.setItem('theme', 'dark');
        themeText.textContent = 'Switch to Light Mode'; // Update text
    } else {
        darkThemeCss.disabled = true;
        localStorage.setItem('theme', 'light');
        themeText.textContent = 'Switch to Dark Mode'; // Update text
    }
}

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeText = document.getElementById('theme-text');
    
    if (savedTheme === 'dark') {
        document.getElementById('dark-theme-css').disabled = false;
        themeText.textContent = 'Switch to Light Mode'; // Update text
    } else {
        themeText.textContent = 'Switch to Dark Mode'; // Update text
    }
});
