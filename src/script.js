let list = [];

const deleteItem = (index) => {
    list.splice(index, 1);
    renderList(list);
}

const createDeleteButton = (index) => {
    const button = document.createElement('button');
    button.innerHTML = 'remove';
    button.classList.add('delete-btn');
    button.addEventListener('click', () => {
        deleteItem(index);
    });
    return button;
}

const createItem = (itemText, index) => {
    // creer un element li
    const li = document.createElement('li');

    // ajouter le texte de l'item
    li.innerText = itemText;

    // creer un bouton pour supprimer l'item
    const button = createDeleteButton(index);

    // ajouter le bouton comme un enfant de li
    li.appendChild(button);

    // retourner l'element li
    return li;

    // ce qui donnera
    // <li>{itemText}<button>remove</button></li>;
}

const renderList = (list) => {
    // selectionner l'element qui contiendra la liste
    const listContainer = document.getElementById('list');

    // on vide la liste pour re-afficher les items de zero, sinon on aurait des doublons
    listContainer.innerHTML = '';

    list.forEach((itemText, index) => {
        // creer un element li
        const li = createItem(itemText, index);

        // l'ajouter comme un enfant de listContainer (qui sera donc le parent)
        listContainer.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // on recupere le texte de l'input
            const itemText = input.value;

            // On ajoute le texte a la liste de todo
            list.push(itemText);

            // On affiche la liste dans le DOM
            renderList(list);
        }
    });
});