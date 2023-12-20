
from  pwn import *

import hashlib
#connect to the address
i=1
while True:
    print(i)
    i+=1 
    s=''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
    io = remote('34.70.212.151',8004) 
    x = io.recvuntil(b':') #'Please md5 hash the text between quotes, excluding the quotes:'
    print(x)
     
    io.send(s.encode()) #sending the md5 hash
    x = io.recvuntil(b':')  
    print(x)
    s=''.join(random.choices(string.ascii_uppercase + string.digits, k=5)) 
    io.send(s.encode()) #sending the md5 hash
    x = io.recvuntil(b'?')  
    print(x)
    score=str(x).split("marks")[0]
    score=str(x).split("got")[1]
    print("score",score.split()[0])
    if x=="100":
          x= io.recvall()  
          print("rs",x)
          break;  
    
    s=''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
    io.send(s.encode())  
    print(io.recvuntil(b'\n')) #md5 hash echoed back
   