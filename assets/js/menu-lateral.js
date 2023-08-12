(() => {

    class CustomMenuLateral extends HTMLElement {

        constructor() {
            // Always call super first in constructor
            super();

            // write element functionality in here
            // Create a shadow root
            const shadow = this.attachShadow({mode: 'open'});

            const nav = document.createElement('nav');
            nav.classList.add("menu-lateral");

            nav.innerHTML = `
                <div class="lateral__logo">
                    <img class="menu-lateral__logo" src="/assets/img/logo.jpg" alt="Logotipo">
                </div>
                <a href="#" class="menu-lateral__link menu-lateral__link--inicio">Cadastro de Combos</a>
            `;

            const resetStyle = document.createElement("link");
            resetStyle.setAttribute("rel", "stylesheet");
            resetStyle.setAttribute("href", "assets/css/reset.css");

            const materialSymbols = document.createElement("link");
            materialSymbols.setAttribute("rel", "stylesheet");
            materialSymbols.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,1,-25");

            const menuLateralStyle = document.createElement("link");
            menuLateralStyle.setAttribute("rel", "stylesheet");
            menuLateralStyle.setAttribute("href", "assets/css/menu-lateral.css");

            const menuLateralAtivo = document.createElement("script");
            menuLateralAtivo.setAttribute("src", "assets/js/menu-lateral-ativo.js");

            shadow.appendChild(resetStyle);
            shadow.appendChild(materialSymbols);
            shadow.appendChild(menuLateralStyle);
            shadow.appendChild(nav);
            shadow.appendChild(menuLateralAtivo);

        }

    }

    customElements.define('custom-menu-lateral', CustomMenuLateral);

})();