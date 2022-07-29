//Things user could say post processeing
const userTexts = [
    //0 
    ["hi", "hey", "hello", "good morning", "good afternoon", "good day"],
    //1
    ["how are you", "how is life", "how are things", "how are you doing", 
    "are you doing good", "are you fine", "how is your day going", "how is your day", 
    "what's up", "whats up", "you good"],
    //2
    ["what are you doing", "what is going on", "what is up", "how is your day", 
    "what's up", "whats up", "you good"],
    //3
    ["how old are you", "are you old"],
    //4
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    //5
    ["who created you", "who made you", "were you created"],
    //goes to my LinkedIn
    ["linkedin", "resume"],
    //goes to my Github
    ["github", "programming", "developer", "dev", "coding", "git"]
]


//bot replies matched in same array as userTexts
const botReplies = [
    //0
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    //1
    [
        "Fine... and you?",
        "Pretty well, and you?",
        "Fantastic, and you?"
    ],
    //2
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    //3
    ["I am infinite", "I'm pretty new, still working out some bugs"],
    //4
    ["I am just a bot", "I am a bot. What are you?", "you can think of my like an extension of Phil, but I'm confused a lot"],
    //5
    ["The one true God, JavaScript", "Phil"],
    //goes to my LinkedIn
    ["<p>Would you like to see Phil's LinkedIn? </p> <a class='btn btn-info ms-5' target='_blank' href='https://www.linkedin.com/in/daumphil/'> <i class='fa fs-1 p-2 fa-linkedin'></i></a>"],
    //goes to my GitHub
    ["<p>Would you like to see Phil's GitHub? </p> <a class='btn btn-info ms-5' target='_blank' href='https://github.com/PhillipDaum'> <i class='fa fs-1 p-2 fa-github'></i></a>"]

]


//Their alternative/error texts n stuffs
const alternative = [
    "does not compute",
    "try typing help",
    "Try again",
    "type the word 'help' and hit enter",
    "I don't understand :/"
]


//a game to debug that later can be a feature
const oneHen = [
    //0 
    ["one hen"],
    //1
    ["one hen", "two ducks"],
    //2
    ["one hen", "two ducks", "three squaking geese"],
    //3
    ["one hen", "two ducks", "three squaking geese", "four corpulent porpuses"]
]


//various welcome messages to welcome user
const welcome = [
    "type something below",
    "enter query or something",
    "write something and hit enter"
]


//names for user
const userName = [
    "you: ",
    "end user: ",
    "earthing: ",
    "human: "
]