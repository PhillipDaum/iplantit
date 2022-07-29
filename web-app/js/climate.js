
//Main RPG Variables
var commands = {
    rpg: [
        { name: "help", "description": ["displays this"] },
        { name: "go", "operators": ["forward", "left", "right", "back"] },
        { name: "inventory", "description": ["displeays your inventory"] },
        { name: "look", "description": ["look around a room or at something in the room"] },
        { name: "grab", "description": ["pickup a thing and add it to your inventory"] },

    ]
}




var items = {
    coins: [
        { name: "linkedin", "description": ["linkedin coin"] },
        { name: "github", "description": ["github coin"] },
        { name: "youtube", "description": ["youtube coin"] },
    ],

    keys: [
        //standard keys
        { name: "gold", "description": ["gold key"] },
        { name: "silver", "description": ["silver key"] },
        //secret keys
        { name: "brown", "description": ["the weird"] },
        { name: "red", "description": ["rickroll"] },
        { name: "black", "description": ["the special key"] },
    ]
}

var inventory = {
    coins: [
        { name: "feature coming soon", "description": ["gold key"] },
    ],

    keys: [
        { name: "pretend stuffs here", "description": ["rickroll"] },
    ]
}



var looky = {
    thing: [
        { name: "landscapes", contents: ["img/unseasonablywarmwinter.png", "img/wildhorses.png"]},
        { name: "abstracts", contents: ["img/thevastnessofitall.png", "img/myfirstdayatthebeach.png"]},
        { name: "other", contents: ["img/whenithinkaboutmeihugmyself.png", "img/self-portrait.png"]},
        { name: "door", contents: ["its a door with a keyhole"]},
    ]
}





