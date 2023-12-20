#picoctf transformation
s="灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸弲㘶㠴挲ぽ"
sum_values = [28777, 25455, 17236, 18043, 12598, 24418, 26996, 29535, 26990, 29556, 13108, 25695, 28518, 24376, 24368, 13411, 12343, 13872, 25725]
i1=0
#for x in s:
 #sum_values[i1]=ord(x)
 #i1+=1   
for value in sum_values:
    for i in range(127):
        if 0 <= (value - (i << 8)) <= 126:
            print(chr(i) + chr(value - (i << 8)), end='') 