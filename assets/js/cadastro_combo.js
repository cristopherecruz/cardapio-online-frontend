function moveToSelected(item) {
    // Remove o item da lista de disponíveis
    item.parentNode.removeChild(item);

    // Adiciona o item à lista de selecionados
    const selectedList = document.getElementById("selected-items");
    selectedList.appendChild(item);

    // Adiciona uma classe para marcar o item como selecionado
    item.classList.add("selected-item");

    // Altera o evento de clique para mover o item de volta à lista de disponíveis
    item.onclick = function() {
        moveToAvailable(item);
    };
}

function moveToAvailable(item) {
    // Remove o item da lista de selecionados
    item.parentNode.removeChild(item);

    // Remove a classe que marca o item como selecionado
    item.classList.remove("selected-item");

    // Adiciona o item à lista de disponíveis
    const availableList = document.getElementById("available-items");
    availableList.appendChild(item);

    // Altera o evento de clique para mover o item para a lista de selecionados
    item.onclick = function() {
        moveToSelected(item);
    };
}

// Função para inicializar os eventos de clique para os itens na lista de disponíveis
function initializeAvailableItems() {
    const availableItems = document.querySelectorAll("#available-items > li");
    availableItems.forEach(item => {
        item.onclick = function() {
            moveToSelected(item);
        };
    });
}

function confirmar() {
    var resultado = confirm("Você realmente quer enviar este formulário?");
    if (resultado == true) {
        // O formulário será enviado
        return true;
    } else {
        // O formulário não será enviado
        return false;
    }
}

// Chame esta função quando a página for carregada
initializeAvailableItems();