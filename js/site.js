// Handles theme switching and table sorting

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const current = localStorage.getItem('theme') || 'dark';
  if (current === 'light') {
    document.body.classList.add('light');
    btn.textContent = 'Dark Mode';
  }
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    btn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
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

window.attachTableSorting = attachTableSorting;

document.addEventListener('DOMContentLoaded', initThemeToggle);
