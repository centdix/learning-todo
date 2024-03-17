let list = [];

function deleteItem(index) {
    // supprimer un element de la liste grace a son index

    // on rappelle renderList pour mettre a jour la liste dans le DOM
}

function createDeleteButton(index) {
    // creer un element button

    // ajouter le texte "Supprimer" a l'element button

    // ajouter un event listener pour supprimer l'item de la liste
    button.addEventListener('click', () => {
        // on appelle la fonction deleteItem avec l'index de l'item a supprimer

    });

    // retourner l'element button
    return button;
}

function createItem(itemText, index) {
    // creer un element li
    const li = document.createElement('li');

    // ajouter le texte de l'item
    li.innerText = itemText;

    // on creer un bouton pour supprimer l'item de la liste
    const deleteButton = createDeleteButton(index);

    // on ajoute le bouton comme un enfant de l'element li

    // retourner l'element li
    return li;

    // ce qui donnera
    // <li>{itemText}<button>Supprimer</button></li>;
}

function renderList(list) {
    // selectionner l'element qui contiendra la liste
    const listContainer = document.getElementById('list');

    // on vide la liste pour re-afficher les items de zero, sinon on aurait des doublons
    listContainer.innerHTML = '';

    for (let i = 0; i < list.length; i++) {

        // on recupere le texte de l'item grace a l'index
        const itemText = list[i];

        // creer un element li, qui contiendra le texte de l'item. On lui passe l'index en parametre pour pouvoir le supprimer
        const item = createItem(itemText, i);

        // l'ajouter comme un enfant de listContainer (qui sera donc le parent)
        listContainer.appendChild(item);
    }

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