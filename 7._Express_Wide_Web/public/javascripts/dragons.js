red = true
setInterval(() => {
    if (red) {
        $("body").css("background-color", "white") 
    } else {
        $("body").css("background-color", "red")
    }
    red = !red
}, 3000)

window.addEventListener( "click", clickPage );

window.onclick = clickPage;

$(document).on( "click", (event) => {
    clickPage();
    image = "<img id=\"image\" src=\"https:\/\/cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_1280.jpg\" alt=\"\"></img>"
    $("#1").append( image );
    setTimeout( () => {
        //$("#1").empty();
        //$("#1").html("1");
        $("#1 img").remove();
    }, 1000 );
} );

function clickPage( ) {
    console.log( "Hello there" );
}
