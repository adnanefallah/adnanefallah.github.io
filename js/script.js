function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.toggle-btn i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

// Detect system dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
