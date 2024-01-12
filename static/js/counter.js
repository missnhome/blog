 

// counter.js

// Function to update and display the visitor count
function updateVisitorCount() {
    // Check if localStorage has a visitor count
    let visitorCount = localStorage.getItem('visitorCount') || 0;

    // Increment the visitor count
    visitorCount++;

    // Update the visitor count in localStorage
    localStorage.setItem('visitorCount', visitorCount);

    // Display the visitor count on your page
    const visitorInfoDiv = document.getElementById('visitor-info');
    visitorInfoDiv.innerHTML = `<p>Total Visitors: ${visitorCount}</p>`;

    // You can also store the visitor count as needed
    // For example, send it to your server for storage
}

// Call the function when the script is loaded
updateVisitorCount();

