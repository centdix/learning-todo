let list = [];

const createItem = (itemText) => {
    // creer un element li
    const li = document.createElement('li');

    // ajouter le texte de l'item
    li.innerHTML = itemText;

    // retourner l'element li
    return li;

    // ce qui donnera
    // <li>{itemText}</li>;
}

const renderList = (list) => {
    // selectionner l'element qui contiendra la liste
    const listContainer = document.getElementById('list');

    // on vide la liste pour re-afficher les items de zero, sinon on aurait des doublons
    listContainer.innerHTML = '';

    // pour chaque item dans la liste:
        // creer un element li
        // l'ajouter comme un enfant de listContainer (qui sera donc le parent)

}

document.addEventListener('DOMContentLoaded', () => {

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // on recupere le texte de l'input
            const itemText = input.value;

            // On ajoute le texte a la liste de todo

            // On affiche la liste dans le DOM
            renderList(list);
        }
    });
});