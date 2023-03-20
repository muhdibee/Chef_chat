const socket = io();

// Collecting DOM elements.
let userMessage = document.getElementById("inputField");
const chatSpace = document.getElementById("chatSpace");
const div = document.createElement("div")

// On initial connection to server
socket.on("connected", async (initailBotMessage)=>{
    console.log("Connected to server.");
    console.log(initailBotMessage);
    console.log("handling event.")
    chatSpace.append(initailBotMessage, div);
    chatSpace.append(initailBotMessage, div);
    chatSpace.append(initailBotMessage, div);
})

socket.emit("userMessage", userMessage.value);

