
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
    <h1>practice picoCTF 2021- Tab, Tab, Attack Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>AUTHOR: SYREAL
general skills
Description
Using tabcomplete in the Terminal will add years to your life, esp. when dealing with long rambling directory structures and filenames: Addadshashanammu.zip
</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li>this ctf is for learning tab complete in terminals.in linux </li>
       <li> type cd and current dir you want search and then press tab complete folder with folder name inside it .do for 11 time and get 
 </li>
      <li>fang-of-haynekhtnamet that is elf fiel and run of it get flag
      </li>
      <li>use this way for zip or imaghes with many nested zips is hard can use this python code in this example too:
      <pre>
      from glob import glob
import os
filename = "Addadshashanammu.zip"
print("\n== Extracting ==\n")
os.system("unzip {} -d {}".format(filename,'/'))
s=glob("**", recursive=True)
print(s[len(s)-1])
os.system("cat "+s[len(s)-1])
</pre>
</li>
    </ol>
<br>
    <h2>Flag</h2>
    <p class="flag">picoCTF{l3v3l_up!_t4k3_4_r35t!_d32e018c}
</p>

    <h2>Conclusion</h2>
    <p>this is a very  easy chanllenge for use tab complete in linux and also search in nested zip and folders with python</p>
</body>
</html>
