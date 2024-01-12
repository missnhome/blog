function getVisitorInfo() {
    // Replace 'YOUR_IPINFO_API_KEY' with your actual IPinfo API key
    const apiKey = 'f3c48b44a1fa0c';
    
    // Make a request to IPinfo API to get information about the visitor's IP
    $.get(`https://ipinfo.io?token=${apiKey}`, function(response) {
        // Access the country information from the API response
        const country = response.country;
        
        // Display the country information wherever you want in your HTML
        document.body.innerHTML += `<p>Visitor from: ${country}</p>`;
        
        // You can also store the country information as needed
        // For example, send it to your server for storage
    });
}

// Call the function when the script is loaded
getVisitorInfo();
