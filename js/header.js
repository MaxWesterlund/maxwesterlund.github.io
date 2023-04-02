// Initial window check
if (window.innerWidth < 600) {
    othello = document.getElementById("othello");
    if (othello != null) {
        toggleGames(document.getElementById("othello").classList.contains("hide"));
    }
}

document.getElementById("burger_menu").addEventListener("click", toggleLinks);
document.getElementById("games").addEventListener("click", toggleLinks);

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_closed")
    document.getElementById("burger_menu").classList.toggle("burger_menu_selected");
}

var games = document.getElementById("games");
if (games != null) {
    games.addEventListener("mouseover", () => { toggleGames(document.getElementById("othello").classList.contains("hide")) });
}
var contact = document.getElementById("contact");
if (contact != null) {
    contact.addEventListener("mouseover", () => { toggleGames(document.getElementById("othello").classList.contains("sublink")) });
}
var start = document.getElementById("start")
if (start != null) {
    start.addEventListener("mouseover", () => { toggleGames(document.getElementById("othello").classList.contains("sublink")) });
}

function toggleGames(a) {
    if (a == true) {
        document.getElementById("othello").classList.toggle("hide");
        document.getElementById("othello").classList.toggle("sublink");
        document.getElementById("terrain").classList.toggle("hide");
        document.getElementById("terrain").classList.toggle("sublink");
    }
}

window.addEventListener("resize", resize);

function resize() {
    if (window.innerWidth < 600) {
        toggleGames(document.getElementById("othello").classList.contains("hide"));
    }
}