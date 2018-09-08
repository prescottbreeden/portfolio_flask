from app import db
from app.models import Tech


a = Tech(name='sass', blurb='SASS ("Syntactically Awesome Style Sheets") is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) and adds a number of progromatic features like functions, mixins, variables, and more to make writing CSS easier.')
b = Tech(name='sql', blurb='MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.')
c = Tech(name='sqlite', blurb='SQLite is a relational database management system contained in a C programming library. SQLite is not a client–server database engine and is instead embedded into the end program.')
d = Tech(name='css3', blurb='')
e = Tech(name='ubuntu', blurb='Ubuntu is a free and open source operating system and Linux distribution based on Debian. Ubuntu is the most popular operating system across public and OpenStack clouds.')
f = Tech(name='vim', blurb='Vim (Vi Improved) is a highly configurable text editor for efficiently creating and changing any kind of text directly from the CLI.')
g = Tech(name='angular', blurb='Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.')
h = Tech(name='react', blurb='')
i = Tech(name='jquery', blurb='')
j = Tech(name='flask', blurb='')
k = Tech(name='django', blurb='')
l = Tech(name='python', blurb='')
m = Tech(name='dotnet', blurb='')
n = Tech(name='csharp', blurb='')
o = Tech(name='nodejs', blurb='')
p = Tech(name='express', blurb='')
q = Tech(name='mongodb', blurb='')
r = Tech(name='apache', blurb='')
s = Tech(name='php', blurb='')
t = Tech(name='github', blurb='')
u = Tech(name='html5', blurb='')
v = Tech(name='vscode', blurb='Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.')

data = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v ]
print('uploading data')
for datum in data:
    print(datum)
    db.session.add(datum)
    db.session.commit()

print('querying data')
tech = Tech.query.all()
for x in tech:
    print(x)
