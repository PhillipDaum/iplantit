class Garden {
    constructor(w, h, beddings, weather, location, postalCode) {
        this.width = w;
        this.height = h;
        this.beddings = beddings;
        //this.hardinessZone = getHardinessZone(postalCode);
        this.postalCode = postalCode;
    }


}

// A bedding object stores all data about a specific bedding
class Bedding extends fabric.Rect {
    constructor(soil, argmap) {
        super(argmap);
        this.seeds = JSON.parse(JSON.stringify(seedMap));;
        this.soil = soil;
        this.availableSpace = 0
    }


}

class Seed {
    constructor(plant, amount) {
        this.plant = plant
        this.amount = amount
    }
}

// represents a plant object, can be parsed from database
class Plant {
    constructor(pid, name, icon, category, hdzs, hdze, spacing, companions, avoid) {
        this.pid = pid;
        this.name = name;
        this.icon = icon;
        this.category = category;
        this.hardinessZoneStart = hdzs;
        this.hardinessZoneEnd = hdze;
        this.spacing = spacing;
        this.companions = companions;
        this.avoid = avoid

    }

    isSuitable(bedding) {

    }
}
var dummy = new Plant(0, "Select Plant")
var sweetBasil = new Plant(1, "Sweet Basil", "", "basil", 2, 11, 9, ["pepper", "tomato"], ["corn", "beans"])
var marvelousMixMint = new Plant(2, "Marvelous Mix Mint", "", "mint", 4, 8, 12, ["carrot", "tomato", "cabbage", "corn"], [])
var vulgareOregano = new Plant(3, "Vulgare Oregano", "", "oregano", 4, 9, 13, ["cabbage", "basil", "peppers", "cucumber"], [])
var commonArugula = new Plant(4, "Common Arugula", "", "arugula", 9, 11, 6, ["asparagus", "basil", "bean", "beet", "borage", "carrot", "corn", "cucumber", "dill", "mint", "allium", "pea", "radish", "chard", "spinach"], ["cabbage", "brassica", "tomato", "pepper", "eggplant", "nightshade", "strawberry"])
var detroitDarkRedBeet = new Plant(5, "Detroit Dark Red Beet", "", "beet", 3, 10, 6, ["onion", "lettuce", "basil", "pepper", "eggplant"], [])
var goldenDetroitBeet = new Plant(6, "Golden Detroit Beet", "", "beet", 3, 10, 3, ["onion", "lettuce", "basil", "pepper", "eggplant"], [])
var greenFortune = new Plant(7, "Green Fortune", "", "cabbage", 2, 11, 5, ["basil", "beet", "chard", "lettuce", "spinach", "onion"], ["tomato"])
var prizeChoy = new Plant(8, "Prize Choy", "", "cabbage", 2, 11, 8, ["basil", "beet", "chard", "lettuce", "spinach", "onion"], ["tomato"])
var greenSprouting = new Plant(9, "Green Sprouting", "", "broccoli", 4, 9, 20, ["basil", "beets", "carrot", "celery", "cucumber", "garlic", "lettuce", "mint", "onions radishes", "spinach", "chard", "thyme"], ["melon", "pepper", "pumpkin", "corn"])
var longIslandImproved = new Plant(10, "Long Island Improved", "", "brussels sprout", 3, 10, 24, ["basil", "beet", "chard", "lettuce", "spinach", "onion"], ["tomato"])

var seedMap = {
    "Sweet Basil": 0,
    "Marvelous Mix Mint": 0,
    "Vulgare Oregano": 0,
    "Common Arugula": 0,
    "Detroit Dark Red Beet": 0,
    "Golden Detroit Beet": 0,
    "Green Fortune": 0,
    "Prize Choy": 0,
    "Green Sprouting": 0,
    "Long Island Improved": 0,
}

var plantMap = {
    "Select Plant": dummy,
    "Sweet Basil": sweetBasil,
    "Marvelous Mix Mint": marvelousMixMint,
    "Vulgare Oregano": vulgareOregano,
    "Common Arugula": commonArugula,

    "Detroit Dark Red Beet": detroitDarkRedBeet,
    "Golden Detroit Beet": goldenDetroitBeet,
    "Green Fortune": greenFortune,
    "Prize Choy": prizeChoy,
    "Green Sprouting": greenSprouting,
    "Long Island Improved": longIslandImproved,
}