fetch('results/round1.csv')
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split('\n').map(row => row.split(','));
    const table = document.createElement('table');

    rows.forEach((cells, i) => {
      const row = document.createElement('tr');
      cells.forEach(cell => {
        const el = document.createElement(i === 0 ? 'th' : 'td');
        el.textContent = cell;
        row.appendChild(el);
      });
      table.appendChild(row);
    });

    const container = document.getElementById('results-table');
    container.innerHTML = '';
    container.appendChild(table);
    if (window.attachTableSorting) {
      window.attachTableSorting(table);
    }
  })
  .catch(err => {
    document.getElementById('results-table').textContent = 'Could not load results.';
    console.error(err);
  });
