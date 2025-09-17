function insert_Row() {
  // Get the table by its ID.
  const table = document.getElementById('sampleTable');

  // Insert a new row at the first position (index 0).
  const newRow = table.insertRow(0);

  // Create two new cells for the new row.
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  // Set the text content for the cells.
  newCell1.textContent = 'New Cell1';
  newCell2.textContent = 'New Cell2';
}