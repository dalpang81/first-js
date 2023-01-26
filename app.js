const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleMouseEnter() {
    title.innerText = "The mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "The mouse is gone!";
}

function handleContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = "blue";
}

function handleWindowResize() {
    title.innerText = "You just resized!";
}


title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("contextmenu", handleContextMenu);
window.addEventListener("resize", handleWindowResize);
