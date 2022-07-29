//these are rooms, they could be like conversations

var rooms = {
    room: [
        { name: "intro", "description": ["you are staring at a dark screen on a device"]},
        { name: "foyer", "description": ["looks like the foyer in fancy motel, there is a <strong>wall</strong> of art."] },
        { name: "hall", "description": ["it's a blank hall, but something is on the <strong>ceiling</strong>"] },
        { name: "great room", "description": ["this room is weird you are stepping on something on the <strong>floor</strong>"] },
    ]
}


//MAIN RPG FUNCTION
//with command go
//and operators forward, left, right, back
function changeRoom(dir) {
    switch (dir) {
        case "start":
            let way0 = document.createElement('div');
            way0.innerHTML = rooms.room[0].description;
            way0.className = "rpg col-sm text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            way0.id = "r"
            document.getElementById("chatloggy").appendChild(way0);
            break;
        case "forward":
            let way1 = document.createElement('div');
            way1.innerHTML = rooms.room[1].description;
            way1.className = "rpg text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(way1);
            break;
        case "left":
            // + 8 when it is  0 or +1 when it is 52 
            let way2 = document.createElement('div');
            way2.innerHTML = rooms.room[2].description;
            way2.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(way2);
            break;
        case "right":
            let way3 = document.createElement('div');
            way3.innerHTML = rooms.room[3].description;
            way3.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(way3);
            break;
        case "back":
            let way4 = document.createElement('div');
            way4.innerHTML = rooms.room[0].description;
            way4.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(way4);
            break;
        default:
            let wayWrong = document.createElement('div');
            wayWrong.innerHTML = "try writing 'go' and then a direction 'forward' 'left' 'right' or 'start'";
            wayWrong.className = "text-info p-2 fs-3 mb-2 font-monospace lh-sm";
            document.getElementById("chatloggy").appendChild(wayWrong);
            break;
    }

}