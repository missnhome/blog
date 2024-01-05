
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
    <h1>practice picoCTF 2021- crackme Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>AUTHOR: SYREAL
crackme.py
https://mercury.picoctf.net/static/be2ba466c6154e42c756bf737ddcecc3/crackme.py
</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
<li>this ctf have no description except a python file openen it below and see that can get flag with add line</li>
        <li> <pr># Hiding this really important number in an obscure piece of code is brilliant!
# AND it's encrypted!
# We want our biggest client to know his information is safe with us.
bezos_cc_secret = "A:4@r%uL`M-^M0c0AbcM-MFE0cdhb52g2N"

# Reference alphabet
alphabet = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"+ \
            "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"



def decode_secret(secret):
    """ROT47 decode

    NOTE: encode and decode are the same operation in the ROT cipher family.
    """

    # Encryption key
    rotate_const = 47

    # Storage for decoded secret
    decoded = ""

    # decode loop
    for c in secret:
        index = alphabet.find(c)
        original_index = (index + rotate_const) % len(alphabet)
        decoded = decoded + alphabet[original_index]

    print(decoded)



def choose_greatest():
    """Echo the largest of the two numbers given by the user to the program

    Warning: this function was written quickly and needs proper error handling
    """

    user_value_1 = input("What's your first number? ")
    user_value_2 = input("What's your second number? ")
    greatest_value = user_value_1 # need a value to return if 1 & 2 are equal

    if user_value_1 > user_value_2:
        greatest_value = user_value_1
    elif user_value_1 < user_value_2:
        greatest_value = user_value_2

    print( "The number with largest positive magnitude is "
        + str(greatest_value) )


print(decode_secret(bezos_cc_secret))#add this line
choose_greatest()
</pr></li>
 <li>also can use online rot47 decoders in this challenge</li>   
    
    </ol>
<br>
    <h2>Flag</h2>
    <p class="flag">picoCTF{1|\/|_4_p34|\|ut_4593da8a}
</p>

    <h2>Conclusion</h2>
    <p>this is a very   easy chanllenge for reverse enginering in python and cryptography</p>
</body>
</html>
