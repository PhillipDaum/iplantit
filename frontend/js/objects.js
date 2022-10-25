class Garden {
    constructor(w, h, beddings, weather, location) {
        this.width = w;
        this.height = h;
        this.beddings = beddings;
    }
}

// A bedding object stores all data about a specific bedding
class Bedding extends fabric.Rect {
    constructor(plants, soil, argmap) {
        super(argmap);
        this.plants = plants;
        this.soil = soil;
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