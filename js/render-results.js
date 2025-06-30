fetch('results/round1.csv')
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split('\n').map(r => r.split(','));
    const table = document.createElement('table');
    table.className = 'table table-hover';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    rows.forEach((cells, idx) => {
      const tr = document.createElement('tr');
      // Apply gold, silver, bronze classes to 1st, 2nd, 3rd data rows
      if (idx === 1) tr.classList.add('gold-row');
      if (idx === 2) tr.classList.add('silver-row');
      if (idx === 3) tr.classList.add('bronze-row');
      cells.forEach(cell => {
        const el = document.createElement(idx === 0 ? 'th' : 'td');
        el.textContent = cell;
        tr.appendChild(el);
      });
      if (idx === 0) thead.appendChild(tr); else tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);

    const container = document.getElementById('results-table');
    container.innerHTML = '';
    container.appendChild(table);
    if (window.jQuery && jQuery.fn.dataTable) {
      $(table).DataTable({
        paging: false,
        info: false,
        searching: false
      });
    }
  })
  .catch(err => {
    document.getElementById('results-table').textContent = 'Could not load results.';
    console.error(err);
  });
// Hide spinner after results load
document.addEventListener('DOMContentLoaded', function() {
  const spinner = document.getElementById('results-spinner');
  if (spinner) spinner.style.display = 'none';
});
