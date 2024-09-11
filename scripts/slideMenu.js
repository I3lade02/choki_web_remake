function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.querySelectorAll('.ham-menu div').forEach(function(bar) {
        bar.style.background = "#eee8d2";
    });
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.querySelectorAll('.ham-menu div').forEach(function(bar) {
        bar.style.background = "#333";
    });
}
