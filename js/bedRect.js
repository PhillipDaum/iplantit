class BedRect {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.context = ctx;
        //this.selected = false;
    }

    selected(mouseX, mouseY) {
        if (mouseX < this.x + this.width &&
            mouseX > this.x &&
            mouseY < this.y + this.height &&
            mouseY > this.y) {
            console.log(this + " is selected");
            return true;
        }
        return false;
    }

    getSelected() {
        //this.selected = true;
        this.context.fillStyle = "orange";
        this.context.clearRect(bedding.x, bedding.y, bedding.width, bedding.height);
        this.context.fillRect(bedding.x, bedding.y, bedding.width, bedding.height);

    }
}



// A bedding object stores all data about a specific bedding
class Bedding {
    constructor(bedRect, plant, soil, location) {
        this.bedRect = bedRect;
    }
}