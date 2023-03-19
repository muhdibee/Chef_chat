


const socket = io();

socket.on("connected", async (data)=>{
    const {id} = data
    console.log("Connected to server.");
    console.log({id});

    // Handling DOM elements.
    chatbotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let userMessage = document.getElementById("inputField");
        // let userMessage = document.getElementById("inputField");

        
        
    } )
})

