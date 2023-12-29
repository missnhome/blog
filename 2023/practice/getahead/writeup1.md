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
    <h1>picoctf(2021)- GET aHEAD Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>Tags: 
AUTHOR: MADSTACKS

Description web exploitation
Find the flag being held on this server to get ahead of the competition http://mercury.picoctf.net:47967/

</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li>one and sample way  $curl -I HEAD -i http://mercury.picoctf.net:47967/index.php in place get method use 
         in this site place select colors
</li>
<li>another way is use burpsuit and change get to head request and forward it and see result in proxy histry</li>
<li>and can get in burpsuit  whne click on post or head request in history 
</li>
<img src="burp1.jpg" alt="burp history ">


     
               

      
    </ol>

    <h2>Flag</h2>
    <p class="flag">The flag for this challenge is `picoCTF{b1scu1ts_4nd_gr4vy_18788aaa}`.</p>

    <h2>Conclusion</h2>
    <p>easy ctf for work with files and get file and intro for pwn or maybe rev challenges</p>
</body>
</html>
