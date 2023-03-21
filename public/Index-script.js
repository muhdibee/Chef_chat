const socket = io();

// Collecting DOM elements.
let body = document.getElementsByTagName('body');
let userMessage = document.getElementById("inputField");
let chatSpace = document.getElementById("chatSpace");
let chatbotForm = document.getElementById("chatbotForm");

// Creating DOM element.
let userParag = document.createElement("p");
let botParag = document.createElement("p");

// Adding CSS
let botParagCSS = `
    position: absolute; 
    left:2%;
    width: 60%;
    padding: 2%;
    background-color: rgb(74, 106, 129);
    border-radius:10px;
    border-bottom-left-radius: 0px;
`
let userParagCSS = `
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

// userParag.style.cssText = userParagCSS;


// On initial connection to server
socket.on("connected", async (initailBotMessage)=>{
    console.log("Connected to server.");
    console.log(initailBotMessage);
    
    botParag.innerHTML = `${initailBotMessage}`
    chatSpace.append(botParag);
    botParag.style.cssText = botParagCSS
})


// Handling form submission.
// chatbotForm.addEventListener("submit", ()=>{
//     if (userMessage.value != 0 || 1 || 97 || 98 || 99){
//         botParag.innerHTML = `${invalidResponse}`;
//         return chatSpace.append(invalidResponse);
//     }
//     socket.emit("userMessage", userMessage.value);
// })


