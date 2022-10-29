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
        this.seeds = seedMap;
        this.soil = soil;
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
}
var dummy = new Plant(0, "Select Plant")
var sweetBasil = new Plant(1, "Sweet Basil", "", "basil", 2, 11, 9, ["pepper", "tomato"], ["corn", "beans"])
var marvelousMixMint = new Plant(2, "Marvelous Mix Mint", "", "mint", 4, 8, 12, ["carrot", "tomato", "cabbage", "corn"], [])
var vulgareOregano = new Plant(3, "Vulgare Oregano", "", "oregano", 4, 9, 13, ["cabbage", "basil", "peppers", "cucumber"], [])
var commonArugula = new Plant(4, "Common Arugula", "", "arugula", 9, 11, 6, ["asparagus", "basil", "bean", "beet", "borage", "carrot", "corn", "cucumber", "dill", "mint", "allium", "pea", "radish", "chard", "spinach"], ["cabbage", "brassica", "tomato", "pepper", "eggplant", "nightshade", "strawberry"])

var seedMap = {
    "Sweet Basil": 0,
    "Marvelous Mix Mint": 0,
    "Vulgare Oregano": 0,
    "Common Arugula": 0
}