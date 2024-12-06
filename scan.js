const express = require('express');
const router = express.Router();

const vegetarianIngredients = [
    "tomato", "lettuce", "spinach", "carrot", "broccoli", "cucumber", "potato",
    "onion", "garlic", "celery", "bell pepper", "cabbage", "cauliflower", 
    "asparagus", "zucchini", "eggplant", "mushroom", "green beans", "peas",
    "corn", "sweet potato", "kale", "arugula", "radish", "beetroot",
    "brussels sprouts", "artichoke", "leek", "okra", "parsnip", "turnip",
    "watercress", "chard", "collard greens", "pumpkin", "squash",

    "apple", "banana", "orange", "grape", "strawberry", "blueberry", "raspberry",
    "blackberry", "mango", "pineapple", "peach", "pear", "plum", "apricot",
    "cherry", "kiwi", "watermelon", "cantaloupe", "honeydew", "fig", "date",
    "pomegranate", "papaya", "guava", "passion fruit", "lychee", "dragonfruit",
    "coconut", "avocado", "lime", "lemon", "grapefruit", "tangerine",

    "rice", "wheat", "oats", "barley", "quinoa", "corn", "millet", "rye",
    "buckwheat", "amaranth", "pasta", "bread", "couscous", "bulgur",
    "semolina", "flour", "cereal",

    "lentils", "chickpeas", "black beans", "kidney beans", "pinto beans",
    "navy beans", "lima beans", "fava beans", "mung beans", "soybeans",
    "edamame", "split peas", "black-eyed peas",

    "almonds", "cashews", "peanuts", "walnuts", "pistachios", "pecans",
    "macadamia", "pine nuts", "hazelnuts", "brazil nuts", "sunflower seeds",
    "pumpkin seeds", "sesame seeds", "chia seeds", "flax seeds", "hemp seeds",
    "poppy seeds",

    "milk", "cheese", "yogurt", "butter", "cream", "eggs", "cottage cheese",
    "sour cream", "whey", "paneer", "mozzarella", "cheddar", "parmesan",
    "feta", "ricotta",

    "basil", "oregano", "thyme", "rosemary", "sage", "mint", "cilantro",
    "parsley", "dill", "chives", "bay leaf", "turmeric", "cumin", "coriander",
    "cardamom", "cinnamon", "nutmeg", "ginger", "black pepper", "paprika",
    "cayenne", "saffron", "vanilla",

    "tofu", "tempeh", "seitan", "textured vegetable protein", "soy protein",
    "jackfruit", "veggie burger", "mock meat", "quorn",

    "olive oil", "vegetable oil", "coconut oil", "vinegar", "mustard",
    "ketchup", "mayonnaise", "soy sauce", "hot sauce", "maple syrup",
    "honey", "jam", "jelly", "hummus", "tahini", "miso", "wasabi",
    "pickles", "olives", "capers",

    "bamboo shoots", "water chestnuts", "jicama", "kohlrabi", "rutabaga",
    "endive", "radicchio", "fennel", "shallots", "spring onion", "scallion",
    "rocket", "bok choy", "napa cabbage", "beet greens", "mustard greens",
    "rapini", "taro", "yam", "cassava", "horseradish"
];

const checkVegetarian = (ingredients) => {
    const lowerIngredients = ingredients.map(i => i.toLowerCase().trim());
    
    for (let ingredient of lowerIngredients) {
        if (!vegetarianIngredients.includes(ingredient)) {
            return "Non-Vegetarian";
        }
    }
    return "Vegetarian";
};

router.post('/', async (req, res) => {
    try {
        const { ingredients } = req.body;
        const ingredientArray = Array.isArray(ingredients) 
            ? ingredients 
            : ingredients.split(',');
            
        const result = checkVegetarian(ingredientArray);
        res.json({ result });
    } catch (error) {
        console.error('Scan error:', error);
        res.status(500).json({ error: 'Error processing ingredients' });
    }
});

module.exports = router;