(() => {

    const botaoMenu = document.querySelector('.header__menu');
    const menu = document.querySelector('.menu-lateral');

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-lateral--ativo');
    })

    const menuLateralItems = document.querySelectorAll('.menu-lateral__link');
    menuLateralItems.forEach(i => {
        i.addEventListener("click", function () {
            menuLateralItems.forEach(j => {
                j.classList.remove("menu-lateral__link--ativo");
            });
            this.classList.add("menu-lateral__link--ativo");
        });
    });

})();