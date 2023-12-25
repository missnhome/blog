with open("enc") as f:
   s=f.read()
   print(s) 
i=0
flag="p"
try:
 while True:
  d = ord(s[i])-(ord(flag[len(flag)-1]) <<8) 
  print(chr(d>>8))
  flag+=chr(d>>8)
  print(flag)
  print(i)
  i+=1
except Exception as e:
 print(str(e))
print(flag)