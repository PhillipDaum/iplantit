// A garden object stores everything about the environment
// contains all the parameter to give a prediction
class Garden {
    constructor(w, h, beddings, weather, location) {
        this.width = w;
        this.height = h;
        this.beddings = beddings;
    }
}

// A bedding object stores all data about a specific bedding
class Bedding {
    constructor(rect, plants, soil) {
        this.rect = rect;
        this.soil = soil
    }
}