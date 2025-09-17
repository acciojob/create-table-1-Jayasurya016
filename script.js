function insert_Row() {
  // Get the table by its ID
  const table = document.getElementById('sampleTable');

  // Insert a new row at the end of the table
  const newRow = table.insertRow(-1);

  // Create two new cells for the row
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  // Set the text content for each cell as specified
  newCell1.innerHTML = 'New Cell1';
  newCell2.innerHTML = 'New Cell2';
}