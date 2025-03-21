document.querySelectorAll('.expandable').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const details = item.querySelector('.details');
    const icon = item.querySelector('.dropdown-icon');
    
    // Listen for clicks on the list item, not just the checkbox
    item.addEventListener('click', (event) => {
        // Prevent the checkbox toggle when clicking directly on the details or title (not the checkbox itself)
        if (event.target !== checkbox && !checkbox.checked) {
            checkbox.checked = true;
        } else if (event.target !== checkbox && checkbox.checked) {
            checkbox.checked = false;
        }
        
        // Trigger the 'change' event on the checkbox manually
        checkbox.dispatchEvent(new Event('change'));
    });

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            details.style.display = 'block'; // Show the details
            icon.classList.add('rotated'); // Rotate the icon
        } else {
            details.style.display = 'none'; // Hide the details
            icon.classList.remove('rotated'); // Reset the rotation
        }
    });
});