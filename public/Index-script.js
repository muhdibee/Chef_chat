const socket = io();

// Collecting DOM elements.
let userMessage = document.getElementById("inputField");
let chatSpace = document.getElementById("chatSpace");

let botParag = document.createElement("p");
botParag.className = 'botParag'

let userParag = document.createElement("p");
userParag.className = 'userParag'


// On initial connection to server
socket.on("connected", async (initailBotMessage)=>{
    console.log("Connected to server.");
    console.log(initailBotMessage);
    console.log("handling event.")
    chatSpace.append(initailBotMessage, botParag);
    chatSpace.append(initailBotMessage, botParag);
    chatSpace.append(initailBotMessage, botParag);
})

socket.emit("userMessage", userMessage.value);

