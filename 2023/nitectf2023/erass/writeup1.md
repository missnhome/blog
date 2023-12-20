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
    <h1>NiteCTF 2023 - ERASS Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>Author: ravinesPlains

Emergency response? Afraid not.

http://eraas.web.nitectf.live/</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li>i open link</li>
        <li>this is a epoch and unix date time convertor convert milisecond to date</li>
        <li>no normal ls or cat input accespt so i used 123&&ls and it run both and get flag.txt</li>
        <li>iuse 123&&cat  flag.txt and get flag</li> 
    </ol>

    <h2>Flag</h2>
    <p class="flag">The flag for this challenge is `nite{b3tt3r_n0_c5p_th7n_b7d_c5p_r16ht_fh8w4d}`.</p>

    <h2>Conclusion</h2>
    <p>easy writeup for epoch and unix time convertor</p>
</body>
</html>
