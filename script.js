function toggleDarkMode() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
    body.classList.toggle('dark-theme');

    const toggleIcon = document.getElementById('toggle-icon');
    toggleIcon.textContent = currentTheme === 'dark-theme' ? '☀️' : '🌙';
} 