const footer = document.getElementsByClassName( "footer" )[0].getElementsByClassName( "copyright" )[0];
const year = new Date().getFullYear();

footer.innerText = "@Copyright " + year;
