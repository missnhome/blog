
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
    <h1>practice picoCTF 2021 - Static ain't always noise Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>Can you look at the data in this binary: static? This BASH script might help!

</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li> download two file in bash script say use  </li>
       <li>if [ -s "$1.ltdis.x86_64.txt" ] then disamble successful otherwise not i use ./static -s "$1.ltdis.x86_64.txt" >
       <li>say:Oh hai! Wait what? A flag? Yes, it's around here somewhere!</li>
       <li>home maybe strings command found flag around file so iuse it and get flag</li>
       <li>becaouse long text use with grep(that is for search in linux command with "|" .  </li>
        <li> $strings ./static  |grep 'pico'
    </ol>
<br>
    <h2>Flag</h2>
    <p class="flag">The flag for this challenge is `picoCTF{d15a5m_t34s3r_ccb2b43e}`.</p>

    <h2>Conclusion</h2>
    <p>this is a easy chanllenge for using linux command and analysis bath and linux with grep and strings </p>
</body>
</html>
