from bs4 import BeautifulSoup
import json
import requests

def foo(string) :
    start = string.find(">") + 1
    end = string.find("<", start)

    return start, end


url = "https://www.prokerala.com/travel/airports/india/"
page = requests.get(url)

soup = BeautifulSoup(page.text, 'html.parser')

x = soup.find_all("tr")

lst = []

# name = str(soup.find(class_="airport-name"))
# a, b = foo(name)
# city = str(soup.find(class_="t-small text-muted"))
# c, d = foo(city)
# code= str(soup.find(class_="tc td-width-60"))
# e, f = foo(code)
# print(a, b, c, d, e, f)

# print(c, d)

for i in x:
    name = str(i.find(class_="airport-name"))
    city = str(i.find(class_="t-small text-muted"))
    code= str(i.find(class_="tc td-width-60"))
    
    if name != "None":
        
        a,b = foo(name)
        c,d = foo(city)
        e,f = foo(code)

        print(a,b,c,d,e,f)
        lst.append({ "name": name[a:b], "city": city[c:d],"code": code[e:f],})

        
        
# print(lst)

json_object = json.dumps(lst, indent = 4) 
print(json_object)

jsonFile = open("iata.json", "w")
jsonFile.write(json_object)
jsonFile.close()

    
