window.onscroll = function blur() {
    var blur_buffer = .01;
    var scroll_dist = window.pageYOffset;

    var background = document.getElementById("start_background");
    if (background != null) {
        background.style.filter = "blur(" + scroll_dist * blur_buffer + "px)";   
    }
}
