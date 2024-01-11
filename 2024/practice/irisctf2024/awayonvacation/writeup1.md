
<!DOCTYPE html>
<html>
<head>
    <style>
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
    <h1>irisctf 2024- Away On Vacation Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p> Iris and her assistant are away on vacation. She left an audio message explaining how to get in touch with her assistant. See what you can learn about the assistant.

 

 

Transcript: Hello, you’ve reached Iris Stein, head of the HR department! I’m currently away on vacation, please contact my assistant Michel. You can reach out to him at michelangelocorning0490@gmail.com. Have a good day and take care.
 
</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
     At first, I tried to send an email to the Michel's email address. To my suprise that there is an automated reply by the account.

 

So the hint is to find Michel's social media with bird posts. To find the username in all possible social media at once, I used this online tool https://instantusername.com/#/ . 


Finally, I found an Instagram account with username @michelangelo_corning

 

Look up for a post that contains a flag.

and get flag 

 
 
       
    
    </ol>
<br>
    <h2>Flag</h2>
    <p class="flag">irisctf{pub1ic_4cc0unt5_4r3_51tt1ng_duck5}
</p>

    <h2>Conclusion</h2>
    <p>this is a very   easy chanllenge for osint</p>
</body>
</html>
