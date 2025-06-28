fetch('results/round1.csv')
  .then(response => response.text())
  .then(csv => {
    const rows = csv.trim().split('\n').map(row => row.split(','));
    const table = document.createElement('table');
    table.className = 'table table-dark table-striped table-hover';

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
    if (window.jQuery && jQuery.fn.dataTable) {
      $(table).DataTable({
        paging: false,
        info: false,
        searching: true
      });
    }
  })
  .catch(err => {
    document.getElementById('results-table').textContent = 'Could not load results.';
    console.error(err);
  });
