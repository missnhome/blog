flag=['']*30
s=['']*30
flag='picoctf{thisisaflag}'
s="灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸弲㘶㠴挲ぽ"
for i in range(0, len(flag), 2):
 s[i]=chr((ord(flag[i]) << 8) + ord(flag[i + 1])) 
 flag[i+1]=ord(s[i])-(ord(flag[i]) << 8) 
 #灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸弲㘶㠴挲ぽ
print(s)
s=(ord('灩')-ord('捯'))
print(s>>8,chr(s>>8))
'''
for i in range(len(s)): 
 if i%2==0:
   flag[i]=chr(ord(s[i])>>8)

print(flag)


flag=['`']*25

for i in range(0, len(s), 1):
 if i%2==0:
  flag[i ]=ord(s[i])-(ord(flag[i]) >>8) 
  flag[i]=chr(flag[i]>>8)   
 else:
    flag[i]=ord(s[i+1])-ord(flag[i-1]) 
 '''