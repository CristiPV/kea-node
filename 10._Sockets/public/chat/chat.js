const socket = io();

function sendMessage() {
    const message = document.getElementById( "chat-box" ).value;
    const username = document.getElementById( "chat-username" ).value;

    socket.emit( "messageSent", { id: socket.id, user: username,  message } );
}

socket.on( "messageSent", ( data ) => {
    const chatContainer = document.getElementById( "chat-container" );

    const chatEntry = document.createElement( "div" );
    chatEntry.classList.add( "chat-entry" );
    
    const chatUser = document.createElement( "p" );
    chatUser.classList.add( "chat-user" );
    chatUser.innerText = "User:     " + data.user;

    const chatMessage = document.createElement( "p" );
    chatMessage.classList.add( "chat-message" );
    chatMessage.innerText = "Message: " + data.message;

    chatEntry.appendChild( chatUser );
    chatEntry.appendChild( chatMessage );

    chatContainer.appendChild( chatEntry );
} );

