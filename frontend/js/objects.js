class Garden {
    constructor(w, h, beddings, weather, location) {
        this.width = w;
        this.height = h;
        this.beddings = beddings;
    }
}

// A bedding object stores all data about a specific bedding
class Bedding extends fabric.Rect {
    constructor(seeds, soil, argmap) {
        super(argmap);
        this.seeds = seeds;
        this.soil = soil;
    }
    addSeed(sd) {
        this.seeds.push(sd);
    }
}

class Seed {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }
}

// represents a plant object, can be parsed from database
class Plant {
    constructor(name, spacing, companions, icon) {
        this.name = name;
        this.spacing = spacing;
        this.companions = companions;
        this.icon = icon;
    }
}