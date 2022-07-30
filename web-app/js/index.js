// This page is a mess as I learn how to do this

function createGarden()


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

