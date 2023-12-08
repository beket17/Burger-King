let navbar=document.getElementById("navbar")
function showMenu(){
    navbar.style.right="0"
}
function hideMenu(){
    navbar.style.right="-220px"
}
let css=document.getElementById("css")
let theme=document.getElementById("theme")
function switchTheme(){
    if(css.getAttribute("href")=="style.css"){
        css.href="dark.css"

    }
    else{
        css.href="style.css"
    }
}