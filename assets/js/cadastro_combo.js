let form = document.querySelector('.main__form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const apiUrl = 'http://localhost:8080/api/combos';

    const formData = new FormData(event.target);

    const combo = {};
    formData.forEach((value, key) => {
        if (key === "preco") {
            combo[key] = parseFloat(value);
        } else {
            combo[key] = value;
        }
    });

    let produtos = document.querySelectorAll('.selected-item');
    produtos.forEach(i => {
        let nome = i.querySelector('.picklist__item__text')
        let preco = i.querySelector('.picklist__item__preco')
        let produtos = {nome: '', preco: ''}
        produtos.nome = nome.textContent;
        produtos.preco = parseFloat(preco.textContent.replace(/[\sA-Za-z]/g, ''));

        combo['produtos'] = [produtos];
    });

    postData(apiUrl, combo)
        .then(responseData => {
            console.log('Response:', responseData);
            // Do something with the response data here
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
    });

});

function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

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