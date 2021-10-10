function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


// ------ burger menu scripts -------- //

document.addEventListener('DOMContentLoaded', function () {
    const burger_menu = document.getElementById('burger-menu')
    const menu = document.querySelector('.menu-list_header')
    const menu_overlay = document.querySelector('.menu__overlay')

    burger_menu.onclick = function () {
        burger_menu.classList.toggle('burger-menu_active')
        menu.classList.toggle('menu-list_show')
        menu_overlay.classList.toggle('menu__overlay_show')
    }
    menu_overlay.onclick = function () {
        burger_menu.click()
    }

    document.querySelectorAll('.menu__link')

    var menu_link = document.querySelectorAll('.menu__link');
    for (var i = 0; i < menu_link.length; i++)
        menu_link[i].addEventListener("click", close_menu);

    function close_menu() {
        if (window.innerWidth <= 992) {
            burger_menu.click()
        }
    }

})
