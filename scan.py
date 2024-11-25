import json
import sys

# Sample vegetarian ingredients (expand with real data)
vegetarian_ingredients = [
    "tomato", "lettuce", "spinach", "carrot", "apple", "rice"
]

def check_vegetarian(ingredients):
    ingredients = json.loads(ingredients)
    for ingredient in ingredients:
        if ingredient.lower() not in vegetarian_ingredients:
            return "Non-Vegetarian"
    return "Vegetarian"

if __name__ == "__main__":
    ingredients = sys.argv[1]
    result = check_vegetarian(ingredients)
    print(result)
