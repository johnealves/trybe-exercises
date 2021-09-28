import json

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

fire_type_pokemons = set()
fire_type_pokemons = [
    pokemon for pokemon in pokemons if "Fire" in pokemon["type"]
]

with open("fire_pokemons.json", "w") as file:
    json.dump(fire_type_pokemons, file)


# for pokemon in fire_type_pokemons:
#     print("-------------------------")
#     print("Nome:", pokemon["name"])
#     if pokemon["evolution"]:
#         print("Evolution", pokemon["evolution"]["name"])
#     print("poder total:", pokemon["total"])
#     print("Hp:", pokemon["hp"])
#     print("Ataque:",pokemon["attack"])
#     print("Defesa:",pokemon["defense"])
#     print("Ataque especial:", pokemon["sp_atk"])
#     print("Defesa especial:", pokemon["sp_def"])
