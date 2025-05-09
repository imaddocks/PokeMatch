const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

function setTheme(mode) {
  body.classList.toggle('dark-mode', mode === 'dark');
  moonIcon.style.display = mode === 'dark' ? 'none' : 'inline';
  sunIcon.style.display = mode === 'dark' ? 'inline' : 'none';
  localStorage.setItem('theme', mode);
}

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');