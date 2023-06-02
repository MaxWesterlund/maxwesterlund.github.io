document.getElementById("burger_menu").addEventListener("click", toggleLinks);

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_closed");
    document.getElementById("burger_menu").classList.toggle("burger_meny_inactive");
    document.getElementById("burger_menu").classList.toggle("burger_menu_active");
}