(() => {
    class CustomHeader extends HTMLElement {
        constructor() {

            super();

            const shadow = this.attachShadow({ mode: 'open' });

            const header = document.createElement('header');
            header.classList.add("body__header");

            header.innerHTML = `
                <button class="header__menu material-symbols-rounded" aria-label="Menu"><i></i></button>
                <img class="header__logo" src="/assets/img/logo.jpg" alt="Logotipo">
                <button class="header__notificacao material-symbols-rounded" aria-label="Notificação"><i></i></button>
            `;

            const resetStyle = document.createElement("link");
            resetStyle.setAttribute("rel", "stylesheet");
            resetStyle.setAttribute("href", "assets/css/reset.css");

            const materialSymbols = document.createElement("link");
            materialSymbols.setAttribute("rel", "stylesheet");
            materialSymbols.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,1,-25");

            const headerStyle = document.createElement("link");
            headerStyle.setAttribute("rel", "stylesheet");
            headerStyle.setAttribute("href", "assets/css/header.css");

            shadow.appendChild(resetStyle);
            shadow.appendChild(materialSymbols);
            shadow.appendChild(headerStyle);
            shadow.appendChild(header);
        }

    }

    customElements.define('custom-header', CustomHeader);

})();