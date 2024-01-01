function filterWriteups() {
            var query = document.getElementById('search-box').value.toLowerCase();
            var links = document.getElementsByClassName('writeup-link');
            var searchResultsHeading = document.getElementById('search-results-heading');
            var resultsCount = 0;

            for (var i = 0; i < links.length; i++) {
                var title = links[i].textContent.toLowerCase();
                var truncatedTitle = links[i].title.toLowerCase();
                var link = links[i].href.toLowerCase();
                var content = links[i].dataset.content.toLowerCase();
                var writeup=loadWriteupContent(link)
                if (title.includes(query) || truncatedTitle.includes(query) || link.includes(query) || content.includes(query)) {
                    links[i].parentElement.style.display = '';
                    resultsCount++;
                } else {
                    links[i].parentElement.style.display = 'none';
                }
            }
            searchResultsHeading.textContent = '';
        }

        function loadWriteupContent(writeupUrl, title) {
            fetch(writeupUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${writeupUrl}. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById('writeup-content').innerHTML = renderMarkdown(data);
                })
                .catch(error => {
                    console.error('Error fetching or parsing content:', error);
                });
        }

        function renderMarkdown(content) {
            return content
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }

        function loadLinksFromTextFile(file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${file}. Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    var links = parseLinksFromText(data);
                    updateSidebar(links);
                })
                .catch(error => {
                    console.error('Error loading links:', error);
                });
        }

        function parseLinksFromText(text) {
            var links = [];
            var lines = text.split('\n');
            for (var i = 0; i < lines.length; i++) {
                var parts = lines[i].split(',');
                if (parts.length === 2) {
                    links.push({ title: parts[0].trim(), url: parts[1].trim() });
                }
            }
            return links;
        }

        function updateSidebar(links) {
            var archiveList = document.getElementById('archive-list');
            var writeupList = document.getElementById('writeup-list');
            
            archiveList.innerHTML = ''; // Clear existing content
            writeupList.innerHTML = ''; // Clear existing content

            for (var i = 0; i < links.length; i++) {
                // Add the link to the archive
                var archiveItem = document.createElement('li');
                archiveItem.textContent = links[i].title;
                archiveList.appendChild(archiveItem);

                // Add the link to the headings
                var writeupItem = document.createElement('li');
                var link = document.createElement('a');
                link.href = links[i].url;
                link.textContent = links[i].title.substring(0, 10); // Display only the first 10 characters
                link.title = links[i].title; // Store the full title as a title attribute
                link.classList.add('writeup-link'); // Add the 'writeup-link' class
                link.dataset.content = ''; // Placeholder for content, update this dynamically if needed
                writeupItem.appendChild(link);
                writeupList.appendChild(writeupItem);

                // Load writeup content on click
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    loadWriteupContent(this.href, this.title); // Pass the full title to loadWriteupContent
                });
            }

            // After updating the sidebar, trigger the filterWriteups function
            filterWriteups();
        }

        window.onload = function () {


    // Load the content for a specific URL
    var specificURL = 'https://missnhome.github.io/blog/2023/asisctf2023/happynewyear/writeup1.md';
    loadWriteupContent(specificURL, 'Custom Title');
        };
