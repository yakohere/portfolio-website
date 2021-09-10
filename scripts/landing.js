function showMenu() {
    const target = document.getElementById("burger-icon");
    target.classList.toggle("burger-open");

    const menu = document.getElementById("menu");
    menu.classList.toggle("show-menu")
}