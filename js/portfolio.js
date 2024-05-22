// Define the filterSelection function
function filterSelection(categories) {
    // Get all the elements with the class name 'column'
    const columns = document.getElementsByClassName('column');

    // Loop through each column element
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];

        // Check if the column has any of the specified categories
        const hasCategory = categories.some(category => column.classList.contains(category));

        // Display the column if it has any of the specified categories, hide it otherwise
        column.style.display = hasCategory ? 'block' : 'none';
    }
}

// Call the filterSelection function with the 'web' and 'cars' categories
filterSelection(['web', 'cars']);