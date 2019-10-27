from bs4 import BeautifulSoup
import requests
import json

links = ["https://www.amazon.com/Best-Sellers-Video-Games-Nintendo-Switch/zgbs/videogames/16227133011/ref=zg_bs_pg_1?_encoding=UTF8&pg=1", "https://www.amazon.com/Best-Sellers-Video-Games-Nintendo-Switch/zgbs/videogames/16227133011/ref=zg_bs_pg_2?_encoding=UTF8&pg=2"]

result = []
for link in links:
  page = requests.get(link)
  soup = BeautifulSoup(page.content, 'html.parser')

  col = soup.find(id='zg-right-col')
  cells = col.find_all('li', class_='zg-item-immersion')


  for i in range(len(cells)):
    tmp = {}
    img = cells[i].find('img')
    tmp['id'] = len(result) + 1
    tmp['title'] = img['alt']
    tmp['image'] = img['src']
    tmp['vote'] = 0
    # tmp = [img['alt'], img['src']]
    result.append(tmp)
# print(json.dumps(result))
with open('data.json', 'w') as outfile:
    json.dump(result, outfile)
