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

function attachTableSorting(table) {
  const headers = table.querySelectorAll('th');
  headers.forEach((th, index) => {
    th.style.cursor = 'pointer';
    th.addEventListener('click', () => {
      const rows = Array.from(table.querySelectorAll('tr')).slice(1);
      const asc = th.dataset.asc !== 'true';
      rows.sort((a, b) => {
        const aText = a.children[index].textContent;
        const bText = b.children[index].textContent;
        const aNum = parseFloat(aText);
        const bNum = parseFloat(bText);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return asc ? aNum - bNum : bNum - aNum;
        }
        return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
      });
      th.dataset.asc = asc;
      rows.forEach(r => table.appendChild(r));
    });
  });
}

function attachSearchFilter(table) {
  const input = document.getElementById('search');
  if (!input) return;
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const rows = table.querySelectorAll('tr');
    rows.forEach((row, idx) => {
      if (idx === 0) return; // skip header
      const driver = row.children[1].textContent.toLowerCase();
      row.style.display = driver.includes(query) ? '' : 'none';
    });
  });
}

window.attachTableSorting = attachTableSorting;
window.attachSearchFilter = attachSearchFilter;

document.addEventListener('DOMContentLoaded', initThemeToggle);
