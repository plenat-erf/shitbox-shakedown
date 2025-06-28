// Theme switching and utilities

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  const current = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-bs-theme', current);
  if (current === 'light') {
    btn.textContent = 'Dark Mode';
  }
  btn.addEventListener('click', () => {
    const isLight = root.getAttribute('data-bs-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    root.setAttribute('data-bs-theme', newTheme);
    btn.textContent = isLight ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', newTheme);
  });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
