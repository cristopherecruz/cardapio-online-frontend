const dataView = document.getElementById('dataView');
const nomeInput = document.getElementById('nome');
const marcaInput = document.getElementById('marca');

const data = [
    { nome: 'Açúcar', marca: 'Marca A' },
    { nome: 'Sal', marca: 'Marca B' },
];

data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'data__view__card';
    card.innerHTML = `<p>Nome: ${item.nome}</p><p>Marca: ${item.marca}</p>`;
    card.addEventListener('click', () => {
        nomeInput.value = item.nome;
        marcaInput.value = item.marca;
    });
    dataView.appendChild(card);
});

const cancelButton = document.getElementById('btCancelar');

cancelButton.addEventListener('click', () => {
    nomeInput.value = '';
    marcaInput.value = '';
});