function getQueryParamOrDefault(name, defaultValue) {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(name);
    return value !== null ? value : defaultValue;
  }
  function hasQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(name);
  }
  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
  function find(event) {
  console.log("Enter key is pressed"+event.keyCode);
  
            if (event.keyCode == 13) {
     var ulElement = document.getElementById("writeup-list");
  
  // Check if the element exists before trying to hide it
  if (ulElement) {
    // Set the display property to "none"
    if( ulElement.style.display == "block")
     ulElement.style.display = "none";
   else
          ulElement.style.display = "block";
  }
                console.log("Enter key is pressed");
                if(!checkFlag()) 
              {
                loadLinksFromTextFile('https://missnhome.github.io/blog/links.txt');
                filterWriteups();
              }
               
                return true;
            } else {
  var ulElement = document.getElementById("writeup-list");
  
  // Check if the element exists before trying to hide it
  if (ulElement) {
    // Set the display property to "none"
    ulElement.style.display = "none";
  }
  
                return false;
            }
        }
  function filterWriteups() {
            var query = document.getElementById('search-box').value.toLowerCase();
            query= getQueryParamOrDefault('query', query);
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
  
  
             if (links.length > 0) {
  var searchResultsHeading = document.getElementById('search-results-heading');
            searchResultsHeading.textContent = '';
            currentWriteupUrl = links[0].href;
            //loadWriteupContent(currentWriteupUrl);
        }
   
        }
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
                words= links[i].title.split(' ');
                link.textContent =words[0]+" "+words[1] 
                link.title = links[i].title; // Store the full title as a title attribute
                link.classList.add('writeup-link'); // Add the 'writeup-link' class
                link.dataset.content = ''; // Placeholder for content, update this dynamically if needed
                writeupItem.appendChild(link);
                writeupList.appendChild(writeupItem);
  
                // Load writeup content on click
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                     currentWriteupUrl=this.href;
  
                    if(endsWith( currentWriteupUrl,".md"))
                    loadWriteupContent(this.href); // Pass the full title to loadWriteupContent
                       else
                       window.location.href=this.href;
  var ulElement = document.getElementById("writeup-list");
  
  // Check if the element exists before trying to hide it
  if (ulElement) {
    // Set the display property to "none"
    ulElement.style.display = "none";
  }
                });
            }
  
            // After updating the sidebar, trigger the filterWriteups function
            filterWriteups();
        }
        function checkFlag() {
  var tempElement = document.createElement('div');
                    tempElement.innerHTML = content;
  
             var flagElement = tempElement.querySelector('.flag');
  
                    // Extract the flag text
                    var flag = flagElement ? flagElement.textContent.trim() : "fakeflag";
  
            var userInput = document.getElementById('search-box').value;
                                console.log('Flag:', flag+":"+userInput+":"+flag.localeCompare(userInput));
  
             if (flag.localeCompare(userInput)==0) {
                        document.getElementById('checkflag').style.display = 'block';return true;
                    } else {
                        document.getElementById('checkflag').style.display = 'none';return false;
                    }
                    return false;
        }
  
        function renderMarkdown(content) {
            return content
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }
  
        // Attach click event listeners to each writeup link
        function getQueryParamOrDefault(name, defaultValue) {
          const urlParams = new URLSearchParams(window.location.search);
          const value = urlParams.get(name);
          return value !== null ? value : defaultValue;
        }
      function hasQueryParam(name) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.has(name);
        }
      function endsWith(str, suffix) {
          return str.indexOf(suffix, str.length - suffix.length) !== -1;
      }
       function find(event) {
        console.log("Enter key is pressed"+event.keyCode);
      
                  if (event.keyCode == 13) {
           var ulElement = document.getElementById("writeup-list");
      
        // Check if the element exists before trying to hide it
         if (ulElement) {
    // Set the display property to "none"
    if( ulElement.style.display == "block")
     ulElement.style.display = "none";
   else
          ulElement.style.display = "block";
  }
     
                      console.log("Enter key is pressed");
                      if(!checkFlag()) 
                    {
                      loadLinksFromTextFile('https://missnhome.github.io/blog/links.txt');
                      filterWriteups();
                    }
                     
                      return true;
                  } else {
        var ulElement = document.getElementById("writeup-list");
      
        // Check if the element exists before trying to hide it
        if (ulElement) {
          // Set the display property to "none"
          ulElement.style.display = "none";
        }
      
                      return false;
                  }
              }
      function filterWriteups() {
                  var query = document.getElementById('search-box').value.toLowerCase();
                  query= getQueryParamOrDefault('query', query);
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
      
      
                   if (links.length > 0) {
      
                  searchResultsHeading.textContent = '';
                  currentWriteupUrl = links[0].href;
                  //loadWriteupContent(currentWriteupUrl);
              }
         
              }
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
                      words= links[i].title.split(' ');
                      link.textContent =words[0]+" "+words[1] 
                      link.title = links[i].title; // Store the full title as a title attribute
                      link.classList.add('writeup-link'); // Add the 'writeup-link' class
                      link.dataset.content = ''; // Placeholder for content, update this dynamically if needed
                      writeupItem.appendChild(link);
                      writeupList.appendChild(writeupItem);
      
                      // Load writeup content on click
                      link.addEventListener('click', function(event) {
                          event.preventDefault();
                           currentWriteupUrl=this.href;
      
                          if(endsWith( currentWriteupUrl,".md"))
                          loadWriteupContent(this.href); // Pass the full title to loadWriteupContent
                             else
                             window.location.href=this.href;
        var ulElement = document.getElementById("writeup-list");
      
        // Check if the element exists before trying to hide it
        if (ulElement) {
          // Set the display property to "none"
          ulElement.style.display = "none";
        }
                      });
                  }
      
                  // After updating the sidebar, trigger the filterWriteups function
                  filterWriteups();
              }
              function checkFlag() {
      var tempElement = document.createElement('div');
                          tempElement.innerHTML = content;
      
                   var flagElement = tempElement.querySelector('.flag');
      
                          // Extract the flag text
                          var flag = flagElement ? flagElement.textContent.trim() : "fakeflag";
      
                  var userInput = document.getElementById('search-box').value;
                                      console.log('Flag:', flag+":"+userInput+":"+flag.localeCompare(userInput));
       
                   if (flag.localeCompare(userInput)==0) {
                              document.getElementById('checkflag').style.display = 'block';return true;
                          } else {
                              document.getElementById('checkflag').style.display = 'none';return false;
                          }
                          return false;
              }
      
              function renderMarkdown(content) {
                  return content
                      .replace(/\n/g, '<br>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              }
      
       
   // Load the content for a specific URL
    var specificURL = 'https://missnhome.github.io/blog/2024/irisctf/czech-where/writeup1.md';
    loadWriteupContent(specificURL);
        
            
 
 