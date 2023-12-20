#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
    char buffer[32];
    printf("Give me some data: \n");
    fflush(stdout);
    fgets(buffer, 64, stdin);
    printf("You entered %s\n", buffer);
    fflush(stdout);
    return 0;
} 
import sys
def sysprint(*args):
    s = " ".join(map(str, args))
    sys.stdout.write(s + "\n")
    sys.stdout.flush()

sysprint(["hi","d"])
sysprint("dawood")
print(10)

import sys

   sys.stdout.write(str(10) + '\n')

The print function first converts the object to a string (if it is not already a string). The print function will also put a space before the object if it is not the start of a line and a newline character at the end.

When you use stdout, that time you need to convert the object to a string by yourself and you will do it by calling "str",  and there is no newline character.
but sys According to this experiment, the write() function can be up to 10% faster than the print() function, with a speed difference of approximately 0.008 seconds per output
Run  successed