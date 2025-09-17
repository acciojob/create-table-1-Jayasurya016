function insert_Row() {
  // Get the table by its ID
  const table = document.getElementById('sampleTable');

  // Create a new row
  const newRow = table.insertRow(-1); // -1 inserts the row at the end of the table

  // Create two new cells
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  // Set the text content for each cell
  newCell1.textContent = 'New Cell1';
  newCell2.textContent = 'New Cell2';
}