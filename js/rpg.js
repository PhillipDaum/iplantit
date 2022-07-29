
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

//Displays Help menu
function showHelp() {
    let helpMenu = document.createElement('div');
      //genereates random admin message
        helpMenu.textContent = admin[Math.floor(Math.random() * admin.length)];
        helpMenu.className = "text-info p-2 fs-3 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(helpMenu);

    //shows possible commands
    for (var i = 0; i < commands.rpg.length; i++) {
        let commandsMenu = document.createElement('div');
        commandsMenu.innerHTML = commands.rpg[i].name;
        commandsMenu.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(commandsMenu);
    }
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

//puts an item in inventory
function grab(b) {
    // when player picks up an item
    inventory.push(b);  
    console.log('whacked the' + b);
}

//displays inventory
function showInventory() {
    //displays inventory message
    let inventoryMenu = document.createElement('div');
        inventoryMenu.innerHTML = "this is what you have:";
        inventoryMenu.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(inventoryMenu);

    //displays inventory list
    //change - items to inventory
    //coins
    for (var i = 0; i < inventory.coins.length; i++) {
        let coinsList = document.createElement('div');
        coinsList.innerHTML = inventory.coins[i].name;
        coinsList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(coinsList);
    }
    //keys
    for (var i = 0; i < items.keys.length; i++) {
        let keysList = document.createElement('div');
        keysList.innerHTML = inventory.keys[i].name;
        keysList.className = "col-2 text-info fs-3 ms-5 mb-2 font-monospace lh-sm";
        document.getElementById("chatloggy").appendChild(keysList);
    }
}



var looky = {
    thing: [
        { name: "landscapes", contents: ["img/unseasonablywarmwinter.png", "img/wildhorses.png"]},
        { name: "abstracts", contents: ["img/thevastnessofitall.png", "img/myfirstdayatthebeach.png"]},
        { name: "other", contents: ["img/whenithinkaboutmeihugmyself.png", "img/self-portrait.png"]},
        { name: "door", contents: ["its a door with a keyhole"]},
    ]
}




//you can look at something in the room
function lookP(ver) {
    switch (ver) {
        case "wall":
             //displays thing description
            let lookMenu0 = document.createElement('div');
            lookMenu0.innerHTML = looky.thing[0].name; 
            lookMenu0.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(lookMenu0);
            for (var k = 0; k < looky.thing[0].contents.length; k++) {
                let lookList = document.createElement('img');
                lookList.src = looky.thing[0].contents[k];
                lookList.className = "img-fluid p-3";
                document.getElementById("chatloggy").appendChild(lookList);
            }          
            break;
        case "ceiling":
              //displays thing description
              let lookMenu1 = document.createElement('div');
              lookMenu1.innerHTML = looky.thing[1].name; 
              lookMenu1.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
              document.getElementById("chatloggy").appendChild(lookMenu1);
              for (var k = 0; k < looky.thing[1].contents.length; k++) {
                  let lookList = document.createElement('img');
                  lookList.src = looky.thing[1].contents[k];
                  lookList.className = "img-fluid p-3";
                  document.getElementById("chatloggy").appendChild(lookList);
              }          
            break;
        case "floor":
              //displays thing description
              let lookMenu2 = document.createElement('div');
              lookMenu2.innerHTML = looky.thing[2].name; 
              lookMenu2.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
              document.getElementById("chatloggy").appendChild(lookMenu2);
              for (var k = 0; k < looky.thing[2].contents.length; k++) {
                  let lookList = document.createElement('img');
                  lookList.src = looky.thing[2].contents[k];
                  lookList.className = "img-fluid p-3";
                  document.getElementById("chatloggy").appendChild(lookList);
              }          
            break;
        case "door":
            //displays thing description
            let lookMenu3 = document.createElement('div');
            lookMenu3.innerHTML = looky.thing[3].name; 
            lookMenu3.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(lookMenu3);
            for (var k = 0; k < looky.thing[3].contents.length; k++) {
                let lookList = document.createElement('div');
                lookList.innerHTML = looky.thing[3].contents[k];
                lookList.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
                document.getElementById("chatloggy").appendChild(lookList);
            }          
            break;
        default:
            //displays thing description
            let lookMenu4 = document.createElement('div');
            lookMenu4.innerHTML = "pick a thing to look at"; 
            lookMenu4.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(lookMenu4);
            break;
    }
}








//this runs the game from user input
//why is it at bottom - load last?
function playerInput(j) {
    var command = j.split(" ")[0];
    switch (command) {
        case "go":
            var dir = j.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "grab":
             //displays no worky message
             let grabby = document.createElement('div');
             grabby.innerHTML = "grab is in development, please come back"; 
             grabby.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
             document.getElementById("chatloggy").appendChild(grabby);
            break;    
        case "inventory":
            showInventory();
            break;
        case "look": 
        var dir = j.split(" ")[1];
            lookP(dir);
            break;
        default:
            break;
    }
}

