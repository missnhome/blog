 function loadWriteupContent(writeupUrl) {
            fetch(writeupUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${writeupUrl}. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    // Create a temporary element to parse the HTML content
                    var tempElement = document.createElement('div');
                    tempElement.innerHTML = data;

                    // Extract the flag element
                    var flagElement = tempElement.querySelector('.flag');

                    // Extract the flag text
                    var flag = flagElement ? flagElement.textContent.trim() : null;

                    // Display the flag in the console (for testing)
                    console.log('Flag:', flag);

                    // Render the writeup content
                    document.getElementById('writeup-content').innerHTML = renderMarkdown(data);

                    // Check if the flag exists and update the UI accordingly
                    if (flag) {
                        document.getElementById('newYearEffect').style.display = 'none';
                    } else {
                        document.getElementById('newYearEffect').style.display = 'block';
                    }
                })
                .catch(error => {
                    console.error('Error fetching or parsing content:', error);
                });
        }

        function checkFlag(userInput) {
            // Load the writeup content on user input change
            loadWriteupContent('https://missnhome.github.io/blog/2023/practice/nicenetcat/writeup1.md');
        }

        function renderMarkdown(content) {
            return content
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }

        // Load the writeup content on page load
        window.onload = function () {
            loadWriteupContent('https://missnhome.github.io/blog/2023/practice/picoctf/nicenetcat/writeup1.md');
        };
