const socket = io();

// Collecting DOM elements.
let body = document.getElementsByTagName('body');
// let chatSpace = document.getElementById("chatSpace");
let chatbotForm = document.getElementById("chatbotForm");
let inputField = document.getElementById("inputField")

// Creating DOM element.
// let botParag = document.createElement("p");
let userParag = document.createElement("p");

// Adding CSS
let botDivgCSS = `
    position: relative; 
    left:2%;
    min-width: 40;
    max-width: 60%;
    padding: 1%;
    margin: 15px;
    color: antiquewhite;
    background-color: rgb(56, 97, 126);
    border-radius:10px;
    border-bottom-left-radius: 0px;
`
let userDivCSS = `
    position: absolute; 
    left:2%;
    width: 60%;
    padding: 2%;
    background-color: rgb(74, 106, 129);
    border-radius:20px;
    border-bottom-left-radius: 0px;
`

// Global variables.
let invalidResponse = `
    <b>Ops, Invalid response</b> </br> </br>
    Select <b>1</b> to Place an order</br>
    Select <b>99</b> to checkout order</br>
    Select <b>98</b> to see order history</br>
    Select <b>97</b> to see current order</br>
    Select <b>0</b> to cancel order
    `
    // Append bot message to chat.
    const appendbotMessage = (message) => {
        let chatSpace = document.getElementById("chatSpace");
        let botDiv = document.createElement("div");
        botDiv.innerHTML = `<p>${message}</P>`
        botDiv.style.cssText = botDivgCSS
        chatSpace.append(botDiv);
  }

    // Append user message to chat.
    const appenduserMessage = (message) => {
        let chatSpace = document.getElementById("chatSpace");
        let botDiv = document.createElement("div");
        botDiv.innerHTML = `<p>${message}</P>`
        botDiv.style.cssText = botDivgCSS
        chatSpace.append(botDiv);
  }



userParag.style.cssText = userParagCSS;


// On initial connection to server.
socket.on("connected", async (initailBotMessage)=>{
    console.log("Connected to server.");
    console.log(initailBotMessage);
    
    appendbotMessage(initailBotMessage);
    
})


// Handling form submission.
chatbotForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userMessage = inputField.value;
    console.log(userMessage)
    if (userMessage != 0 || 1 || 97 || 98 || 99){
        userMessage = "";
        appenduserMessage(userMessage);
        appendbotMessage(invalidResponse);
        return
    }
    socket.emit("userMessage", userMessage);
})


