const socket = io();

// Collecting DOM elements.
let body = document.getElementsByTagName('body');
// let chatSpace = document.getElementById("chatSpace");
let chatbotForm = document.getElementById("chatbotForm");
let inputField = document.getElementById("inputField")

// Creating DOM element.
// let botParag = document.createElement("p");
// let userParag = document.createElement("p");

// Adding CSS
let botDivgCSS = `
    position: relative; 
    left:2%;
    min-width: 40%;
    max-width: 60%;
    padding: 1%;
    margin: 15px;
    color: antiquewhite;
    background-color: rgb(56, 97, 126);
    border-radius:10px;
    border-bottom-left-radius: 0px;
`
let userDivCSS = `
    // position: relative; 
    float: right;
    display:grid;
    right:2%;
    min-width: 40%;
    max-width: 60%;
    padding: 1%;
    margin: 15px;
    color: black;
    background-color: skyblue  ;
    border-radius:10px;
    border-bottom-right-radius: 0px;
`

// Global variables.
let div = document.createElement("div");
let p = document.createElement("p");

let invalidResponse =   `<b>Ops, Invalid response.</b>`
    let options = `<div>
    Select <b>1</b> to Place an order.</br>
    Select <b>99</b> to checkout order.</br>
    Select <b>98</b> to see order history.</br>
    Select <b>97</b> to see current order.</br>
    Select <b>0</b> to cancel order.</div>
`
    // Append bot message to chat.
    const appendStringBotMessage = (message) => {
        let chatSpace = document.getElementById("chatSpace");
        let botDiv = document.createElement("div");
        botDiv.innerHTML =  message;
        botDiv.style.cssText = botDivgCSS
        chatSpace.append(botDiv);
        console.log(botDiv);
        chatSpace.scrollTop = chatSpace.scrollHeight;
  }
    // Append bot message to chat.
    const appendElementBotMessage = (message) => {
    let chatSpace = document.getElementById("chatSpace");
    let botDiv = document.createElement("div");
    botDiv.append(message);
    botDiv.style.cssText = botDivgCSS
    chatSpace.append(botDiv);
    console.log(botDiv);
    chatSpace.scrollTop = chatSpace.scrollHeight;
}


    // Append user message to chat.
    const appenduserMessage = (message) => {
        let chatSpace = document.getElementById("chatSpace");
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `<div>${message}</div>`
        userDiv.style.cssText = userDivCSS
        chatSpace.append(userDiv);
        chatSpace.scrollTop = chatSpace.scrollHeight;
  }

// On bothello Message.
socket.on("botHello", async (botHello)=>{
    console.log(botHello);
    appendStringBotMessage(botHello);
});

// On bothello Message.
socket.on("menuOptions", async (menuOptions)=>{
    console.log(menuOptions);
    appendStringBotMessage(menuOptions);
})



// Handling form submission on user first reply.
chatbotForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let userMessage = inputField.value;
    if(userMessage.length < 1){
        return
    }
    console.log(userMessage)

    function returnUserMess(userMessage){
        appenduserMessage(userMessage);
        return inputField.value = "";
    }
    if (userMessage == 0){
        returnUserMess(userMessage);
        socket.emit("0", 0)
    }
    else if (userMessage == 1){
        returnUserMess(userMessage);
        socket.emit("1", 1)
    } 
    else if (userMessage == 97){
        returnUserMess(userMessage);
        socket.emit("97", 97);
    }    
    else if (userMessage == 98){
        returnUserMess(userMessage);
        socket.emit("98", 98);
    }    
    else if (userMessage == 99){
        returnUserMess(userMessage);
        socket.emit("99", 99);
    }
    else{
        appenduserMessage(userMessage);
        appendStringBotMessage(invalidResponse);
        appendStringBotMessage(options);
        return inputField.value = "";
        
    }
});

socket.on("empty order", (message)=>{
    appendStringBotMessage(message);
    
});

socket.on("menu", (menu)=>{
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const p = document.createElement("p");

    p.innerHTML = `<b>Please select: </b>`;
    for(const id in menu){
        const li = document.createElement("li");   
        li.innerText = `${id} for ${menu[id]}`;
        ul.append(li);
    }
    div.append(p)
    div.append(ul);

    appendElementBotMessage(div);

})



