
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
    <h1>picoctf 2022- buffer overflow 0 Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p> Smash the stack
Let's start off simple, can you overflow the correct buffer? The program is available here. You can view source here. And connect with it using:
nc saturn.picoctf.net 65443
https://artifacts.picoctf.net/c/174/vuln.c
https://artifacts.picoctf.net/c/174/vuln
</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li> we open c program becaouse this  is buffer overflow when  program crash  run sigsegv_handler in this example</li>
        <li>becaosue<pre>  #define FLAGSIZE_MAX 64

char flag[FLAGSIZE_MAX];...............................................
  char buf1[100];
  gets(buf1);</pre>
 you maybe think need 64 character to buffer over flow or 100 character for overflow becaouse volunerable gets functions but thisis not only vulnerable 
function vuln(buf1) as name you can see is main function for vulnerable and so strcpy <pre>void vuln(char *input){
  char buf2[16];
  strcpy(buf2, input);
}
</pre>
so if you use  (20 a character)16 character +4(char*input size) can overflow this program and get flag
           
       
    
    </ol>
<br>
    <h2>Flag</h2>
    <p class="flag">picoCTF{ov3rfl0ws_ar3nt_that_bad_c5ca6248}

</p>

    <h2>Conclusion</h2>
    <p>this is a very   easy chanllenge for work on buffer overflow</p>
</body>
</html>
