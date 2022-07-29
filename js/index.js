 //Welcome messages
function welcomeTo() {
    let wMessage = document.createElement('h2');  
        wMessage.textContent = welcome[Math.floor(Math.random() * welcome.length)];
        wMessage.className = "text-info mt-5 font-monospace";

    //uptates HTML DOM
    document.getElementById("chatloggy").appendChild(wMessage);

    //genereates random user avatar
    document.getElementById('username').textContent = userName[Math.floor(Math.random() * userName.length)];

    //user input text area is ready to by typed in
    document.getElementById('input').focus();
}

//enter key works
// prints user input and avatar
//then pings the RPG
//layer input chatbot
//finally it scrolls up the doc - temp undoing this
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        let user = document.getElementById("input").value;
        //updates DOM with username and avatar
        writeUser (user);
        //removes text after they hit enter
        document.getElementById("input").value = "";

        //remove all characters except word characters, space, and digits    
        let text = user.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
        .replace(/ a /g, " ")   // replaces 'tell me a story' to 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is") // replaces "whats" to "what is"
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you"); //replaces "r u" to "are you"

        //sloppy code
        var slip = text.split(" ")[0];
        let slop = "go help inventory look grab"
         //then checks to see for commands
        if (slop.includes(slip)) {
             //first does RPG commands
             playerInput(text);
            
        } else {
            chatBot(text);
        }
    }
        //keeps input in view needs to work on mobile too -trying it without this cuz of bug in the embed on the portfolio site
        //document.getElementById('username').scrollIntoView(true);
}
)


//comparing function for matching user input with response
function compare(a, b, c) { 
    for (let x = 0; x < a.length; x++) {
        for (let y = 0; y < b.length; y++){
          if (a[x][y] == c) {
            let replies = b[x];
            let reply = replies[Math.floor(Math.random() * replies.length)];
            return reply;
          }
        }
    }
}


//updates DOM with user input and avatar
function writeUser(k) {
    //makes username print also when DOM updates
    let avatar = document.getElementById("username").textContent;
    let finalUser = avatar + k;

    //uptates HTML DOM with user input and username
    let parUser = document.createElement('h2');  
    parUser.textContent = finalUser;
    parUser.className = "text-success"
    document.getElementById("chatloggy").appendChild(parUser);
}


// main chat function
function chatBot(g) {
    // then chatbot arrays
    // then random answer
    if (compare(userTexts, botReplies, g)) { 
        // search for exact match in `userTexts`
        finalResult = compare(userTexts, botReplies, g);
    } else {
        // if everything else fails, bot produces a random alternative reply
        finalResult = alternative[Math.floor(Math.random() * alternative.length)];
        }
    
    //uptates HTML DOM 
    let parBot = document.createElement('div')  
    parBot.innerHTML = finalResult;
    parBot.className = "text-info fs-3 ms-3 mb-2 font-monospace lh-sm";
    document.getElementById("chatloggy").appendChild(parBot);  
} 



