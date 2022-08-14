// getting started with this initial array.
// the spacing is like a radius around the plant as a centerpoint. It is in inches.
const plants = [];
plants[0] = { name: "sweet basil", spacing: 1, companions: "", icon: "<i class="fa-solid text-success fa-leaf"></i>"};
plants[1] = { name: "cherry tomato", spacing: 16, companions: "", icon: "<i class="fa-solid text-danger fa-circle"></i>"};
plants[2] = { name: "serrano pepper", spacing: 6, companions: "", icon: "<i class="fa-solid text-success fa-pepper-hot"></i>"};
plants[3] = { name: "red onion", spacing: 2, companions: "", icon: "<i class="fa-solid text-danger fa-circle-half-stroke"></i>"};
plants[4] = { name: "cucumber", spacing: 2, companions: "", icon: "<i class="fa-solid fa-feather-pointed"></i>"};
plants[5] = { name: "romaine lettuce", spacing: 3, companions: "", icon: "<i class="fa-solid text-success fa-spa"></i>"};
plants[6] = { name: "cantaloupe melon", spacing: 7, companions: "", icon: "<i class="fa-solid text-warning fa-circle"></i>"};
plants[7] = { name: "yellow squash", spacing: 10, companions: "", icon: "<i class="fa-solid text-warning fa-burst"></i>"};
plants[8] = { name: "eggplant", spacing: 2, companions: "", icon: "<i class="fa-solid fa-mound"></i>"};
plants[9] = { name: "curly kale", spacing: 9, companions: "", icon: "<i class="fa-solid fa-certificate"></i>"};
plants[10] = { name: "carrot", spacing: 9, companions: "", icon: "<i class="fa-solid text-warning fa-carrot"></i>"};


// initial function to make the garden output
function makeGarden() {
//submit the user data
//taget the two boxes, take the numbers from it
let length = document.getElementById

let width = document.getElementById


// go to the next page
window.open('output.html','_self');

// draw the rectangle using those numbers
// it will be a grid of one inch squares. 1 in = 10 px
// we should maybe add a little bit for the outline width
    document.createCanvas
        // width = width*10
        // length = length*10
        // style="border:1px solid #000000;">


// it will take the best answer from the array of what to plant
// this part may be a little bit harder

// it will print all of the icons inside of it

}

// first take the space of the garden
// maybe it can be like a bubble sort or something
// each plant takes up a one by one cube, surrounded by its radius
// first - MAYBE - get rid of any plant with too big a radius for the garden space
// then, rules?
    // plants are the bubbles
    // some plants can't go in the same garden bed
    // try to plant a quantity of planyts for radius size???
    // maybe just start for the first one with one plant to be the main one.
    // it will pick the biggest one that fits in that area
    // then pick a companion plant
    // set an arbitrary ratio of one to the other to at least achieve
    // it can permutate through various options until one works
    // then just pick the first one and that's it - for now