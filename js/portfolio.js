// Define the filterSelection function
function filterSelection(category) {
    // Get all the elements with the class name 'column'
    const columns = document.getElementsByClassName('column');

    // Loop through each column element
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];

        // Check if the column has the specified category
        if (column.classList.contains(category)) {
            // Display the column with the specified category
            column.style.display = 'block';
        } else {
            // Hide the column without the specified category
            column.style.display = 'none';
        }
    }
}

// Call the filterSelection function with the 'web' category
filterSelection('web');
filterSelection('cars');



