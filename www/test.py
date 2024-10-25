import requests
r = requests.get('https://kai.ru/raspisanie')
print(r.text)