/**
 * Listeners sur les inputs
 *
 */
window.addEventListener('load', function () {
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('fieldset input:not([id="btn_annuler"])');
    let tabEvents = ['click', 'keyup', 'focus', 'mousemove'];
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], yourNote);
        }
    }
});

function yourNote() {
    // Déclaration et affectation des variables
    let note = getInt('#note_b');

    // Gestion des affichages
    if (note < 8) {
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'red');
    }else if (note < 10){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'orange');
    }else if (note < 12){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'black');
        affiche('h3', 'section', 'mention', 'Mention : ' + getMention(note), 'orange');
    }else if (note < 14){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'black');
        affiche('h3', 'section', 'mention', 'Mention : ' + getMention(note), 'orange');
    }else if (note < 16){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'black');
        affiche('h3', 'section', 'mention', 'Mention : ' + getMention(note), 'orange');
    }else if (note < 20){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'black');
        affiche('h3', 'section', 'mention', 'Mention : ' + getMention(note), 'orange');
    }else if (note > 20){
        affiche('h3', 'section', 'statut', 'Statut : ' + getBac(note), 'black');
        affiche('h3', 'section', 'mention', 'Mention : ' + getMention(note), 'orange');
        affiche('h3','section','bonus',"Bonus : Rendez-vous à l'Elysée !",'green');
    }
}

function affiche(typeEl, cible, id, contenu, couleur) {
    let elH3 = window.document.querySelector('#' + id);
    if (!elH3) {
        elH3 = window.document.createElement(typeEl);
        elH3.id = id;
        window.document.querySelector(cible).appendChild(elH3);
    }
    // Affichage de l'élément dans la couleur demandée
    elH3.style.setProperty('color', couleur);
    elH3.innerHTML = contenu;
}
function getBac(note) {
    if (note < 8) {
        return "Ajourné(e)";
    }else if ((note >= 8) && (note < 10))
    {
        return "Rattrapage";
    } else
    {
        return "Bac Obtenu";
    }
}
function getMention(note) {
    if ((note >= 10) && (note <12)) {
        return "mention Passable";
    }else if ((note >= 12) && (note < 14))
    {
        return "Mention Assez Bien";
    }else if ((note >= 14) && (note < 16))
    {
        return "Mention Bien";
    }else if (note >= 16)
    {
        return "Mention Très Bien";
    }
}

function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}