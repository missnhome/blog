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
    <h1>picopractice(2021)- Matryoshka doll Challenge Writeup</h1>

    <h2>Challenge Description</h2>
    <p>Matryoshka dolls are a set of wooden dolls of decreasing size placed one inside another. What's the final one? Image: this
</p>

    <h2>Solution Approach</h2>
    <p>Here are the steps we took to solve the challenge:</p>
    <ol>
        <li>matrioska doll is a nested dool commonly means nested files and zip and image in this case for solve this problem i use this code fr</li>
        <li>
def solve():
 import os
 filename = "dolls.jpg"
 extract_dir = "ext"
 flag = 0
 while flag == 0:
	print("\n== Extracting ==\n")
	os.system("unzip {} -d {}".format(filename,extract_dir))
	if os.path.exists(extract_dir+"/base_images"):
		os.chdir(extract_dir+"/base_images")
	else:
		os.chdir(extract_dir)
	for file in os.listdir():
		if file.endswith(".txt"):
			print("\n== FLAG: ")
			print(os.system("cat {}".format(file)))
			flag = 1
		else:
			filename = file
and get flag.
  </li>
               

      
    </ol>

    <h2>Flag</h2>
    <p class="flag">The flag for this challenge is `picoCTF{336cf6d51c9d9774fd37196c1d7320ff}`.</p>

    <h2>Conclusion</h2>
    <p>easy ctf for Forensics and get flag and folders from image and even zip files</p>
</body>
</html>
