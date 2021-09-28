import json

books = []

with open("books.json") as file:
    for line in file:
        books.append(json.loads(line))

print(books)
