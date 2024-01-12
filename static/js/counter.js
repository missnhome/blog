 

// counter.js

// Function to get visitor information from IPinfo API
function getVisitorInfo() {
  
    const apiKey = 'f3c48b44a1fa0c';

    // Check if localStorage has a visitor count
    let visitorCount = localStorage.getItem('visitorCount') || 0;

    // Make a request to IPinfo API to get information about the visitor's IP
    $.get(`https://ipinfo.io?token=${apiKey}`, function(response) {
        // Access the country information from the API response
        const country = response.country;

        // Increment the visitor count
        visitorCount++;
        // Update the visitor count in localStorage
        localStorage.setItem('visitorCount', visitorCount);

        // Display the country and visitor count on your page
        const visitorInfoDiv = document.getElementById('visitor-info');
        visitorInfoDiv.innerHTML = `<p>Visitor from: ${country}</p><p>Total Visitors: ${visitorCount}</p>`;

        // You can also store the country information and visitor count as needed
        // For example, send them to your server for storage
    });
}

// Call the function when the script is loaded
getVisitorInfo();
