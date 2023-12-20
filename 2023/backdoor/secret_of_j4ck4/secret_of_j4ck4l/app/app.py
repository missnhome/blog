from flask import Flask, request, render_template_string, redirect
import os
import urllib.parse

app = Flask(__name__)

base_directory = "message/"
default_file = "message.txt"

def ignore_it(file_param):
    yoooo = file_param.replace('.', '').replace('/', '')
    if yoooo != file_param:
        return "Illegal characters detected in file parameter!"+str(file_param)
    return yoooo

def another_useless_function(file_param):
    return urllib.parse.unquote(file_param)

def url_encode_path(file_param):
    return urllib.parse.quote(file_param, safe='')

def useless (file_param):
    file_param1 = ignore_it(file_param)
    print("file1",file_param)
    file_param2 = another_useless_function(file_param1)
    print("file2",file_param) 
    file_param3 = ignore_it(file_param2)
    print("file3",file_param)
    file_param4 = another_useless_function(file_param3)
    print("file4",file_param) 
    file_param5 = another_useless_function(file_param4)
    print("file5",file_param)
    return file_param5


@app.route('/')
def index():
    return redirect('/read_secret_message?file=message')

@app.route('/read_secret_message')
def read_file(file_param=None):
    file_param = request.args.get('file')
    file_param = useless(file_param)
    print("modified",file_param)
    file_path = os.path.join(base_directory, file_param)

    try:
        with open(file_path, 'r') as file:
            content = file.read()
        return content
    except FileNotFoundError:
        return 'File not found! or maybe illegal characters detected'+str(file_path)
    except Exception as e:
        return f'Error: {e}'


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=4053)
