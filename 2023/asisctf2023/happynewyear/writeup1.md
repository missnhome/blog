<!DOCTYPE html>
<html>
<head>
    <style>
    body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 50px;
        }

        #newYearEffect {
            display: none;
            font-size: 24px;
            color: #fff;
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
        }
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #666;
        }
        p {
            color: #999;
        }
        .flag {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>AsisCTF 2023 - Happy New Year! Writeup</h1>

    <h2>Challenge Description</h2>
    <p>Welcome to the final ASIS CTF of 2023! We're thrilled to spend this last Saturday of the year with you. Oh, and a Happy New Year in advance! Grab the following flag:


ASIS{🎈🍻💃🌃🎆🎇🍾🎉🎊🍷🍸🍹🍺🏙️🍆🗻🥃🥂🕺🌉🕛🥳👯}



</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li>sample copy and past flag</li>
       

      
    </ol>

    <h2>Flag</h2>
    <label for="textInput">Enter the magic string:</label>
    <input type="text" id="textInput" oninput="checkMagicString(this.value)">
    
    <div id="newYearEffect">
        🎉🎊 Happy New Year 2024! 🎊🎉
    </div>

    <script>
        function checkMagicString(value) {
            const magicString = "ASIS{🎈🍻💃🌃🎆🎇🍾🎉🎊🍷🍸🍹🍺🏙️🍆🗻🥃🥂🕺🌉🕛🥳👯}";

            if (value === magicString) {
                showNewYearEffect();
            } else {
                hideNewYearEffect();
            }
        }

        function showNewYearEffect() {
            const newYearEffect = document.getElementById("newYearEffect");
            newYearEffect.style.display = "block";
            setTimeout(() => {
                hideNewYearEffect();
            }, 5000); // Hide the effect after 5 seconds
        }

        function hideNewYearEffect() {
            const newYearEffect = document.getElementById("newYearEffect");
            newYearEffect.style.display = "none";
        }
    </script>

    <h2>Conclusion</h2>
    <p>this is a easy chanllenge all ctf almost have copy and past</p>
</body>
</html>
