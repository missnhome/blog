 var currentWriteupUrl = '';
var content="";
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
                     content=data
                    // Extract the flag element
                    var flagElement = tempElement.querySelector('.flag');

                    // Extract the flag text
                    var flag = flagElement ? flagElement.textContent.trim() : null;

                    // Display the flag in the console (for testing)
                    console.log('Flag0:', flag);

                    // Render the writeup content
                    document.getElementById('writeup-content').innerHTML = renderMarkdown(data);

                   
                })
                .catch(error => {
                    console.error('Error fetching or parsing content:', error);
                });
        }

        function checkFlag() {
var tempElement = document.createElement('div');
                    tempElement.innerHTML = content;

             var flagElement = tempElement.querySelector('.flag');

                    // Extract the flag text
                    var flag = flagElement ? flagElement.textContent.trim() : null;

            var userInput = document.getElementById('textInput').value;
                                console.log('Flag:', flag+":"+userInput+":"+flag.localeCompare(userInput));
 
             if (flag.localeCompare(userInput)==0) {
                        document.getElementById('newYearEffect').style.display = 'block';
                    } else {
                        document.getElementById('newYearEffect').style.display = 'none';
                    }
        }

        function renderMarkdown(content) {
            return content
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }

        // Attach click event listeners to each writeup link
        var writeupLinks = document.querySelectorAll('.writeup-link');
        writeupLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                currentWriteupUrl = link.href;
                loadWriteupContent(currentWriteupUrl);
            });
        });

        // Load the content of the first writeup on page load
        if (writeupLinks.length > 0) {
            currentWriteupUrl = writeupLinks[0].href;
            loadWriteupContent(currentWriteupUrl);
        }
