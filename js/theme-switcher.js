function switchTheme() {
    const darkThemeCss = document.getElementById('dark-theme-css');
    const themeToggleButtonText = document.getElementById('theme-text'); 
    const themeStatusText = document.getElementById('themeText'); 

    if (darkThemeCss.disabled) {
        darkThemeCss.disabled = false;
        localStorage.setItem('theme', 'dark');
        themeToggleButtonText.textContent = 'Switch to Light Mode'; 
        themeStatusText.textContent = 'Dark Mode'; 
    } else {
        darkThemeCss.disabled = true;
        localStorage.setItem('theme', 'light');
        themeToggleButtonText.textContent = 'Switch to Dark Mode'; 
        themeStatusText.textContent = 'Light Mode'; 
    }
}

function updateThemeText() {
    const darkThemeCss = document.getElementById('dark-theme-css');
    const themeStatusText = document.getElementById('themeText');
    
    if (darkThemeCss.disabled) {
        themeStatusText.textContent = 'Light Mode'; 
    } else {
        themeStatusText.textContent = 'Dark Mode'; 
    }
}

// Applying the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const darkThemeCss = document.getElementById('dark-theme-css');
    const themeToggleButtonText = document.getElementById('theme-text');
    const themeStatusText = document.getElementById('themeText');

    if (savedTheme === 'dark') {
        darkThemeCss.disabled = false;
        themeToggleButtonText.textContent = 'Switch to Light Mode'; 
        themeStatusText.textContent = 'Dark Mode'; 
    } else {
        darkThemeCss.disabled = true;
        themeToggleButtonText.textContent = 'Switch to Dark Mode'; 
        themeStatusText.textContent = 'Light Mode'; 
    }
});
