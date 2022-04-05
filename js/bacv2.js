/**
 * Listeners sur les inputs
 *
 */
window.addEventListener('load', function () {
    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('fieldset input:not([id="btn_annuler"])');
    let tabEvents = ['click','keyup','focus','mousemove'];
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for(let j = 0 ; j < tabEvents.length;j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j],yourBac);
        }
    }
});

function yourBac() {
    // Déclaration et affectation des variables
    let fre = getInt('#fre');
    let fro = getInt('#fro');
    let hg = getInt('#hg');
    let math = getInt('#math');
    let phys = getInt('#phys');
    let svt = getInt('#svt');
    let lv1 = getInt('#lv1');
    let lv2 = getInt('#lv2');
    let phil = getInt('#phil');
    let eps = getInt('#eps');
    let spec = getString('#spec input[type="radio"]:checked');
    let note = getMoyenne(fre,fro,hg,math,phys,svt,lv1,lv2,phil,eps,spec);
    // Gestion des affichages
    affiche ('h3','section','moyenne','Moyenne : ' + note,'black');
    if (note < 8) {
        affiche('h3', 'section', 'statut', 'Statut : Ajourné(e)', 'red');
        supprime('mention');
    }else if (note < 10){
        affiche('h3', 'section', 'statut', 'Statut : Rattrapage', 'orange');
        supprime('mention');
    }else if (note < 12){
        affiche('h3', 'section', 'statut', 'Statut : Bac Obtenu', 'black');
        affiche('h3', 'section', 'mention', 'Mention : Passable', 'orange');
        supprime('bonus');
    }else if (note < 14){
        affiche('h3', 'section', 'statut', 'Statut : Bac Obtenu', 'black');
        affiche('h3', 'section', 'mention', 'Mention : Assez Bien', 'orange');
        supprime('bonus');
    }else if (note < 16){
        affiche('h3', 'section', 'statut', 'Statut : Bac Obtenu', 'black');
        affiche('h3', 'section', 'mention', 'Mention : Bien', 'orange');
        supprime('bonus');
    }else if (note < 20){
        affiche('h3', 'section', 'statut', 'Statut : Bac Obtenu', 'black');
        affiche('h3', 'section', 'mention', 'Mention : Très Bien', 'orange');
        supprime('bonus');
    }else if (note > 20){
        affiche('h3', 'section', 'statut', 'Statut : Bac Obtenu', 'black');
        affiche('h3', 'section', 'mention', 'Mention : Très Bien','orange');
        affiche('h3','section','bonus',"Bonus : Rendez-vous à l'Elysée !",'green');
    }
}
function getMoyenne(fre,fro,hg,math,phys,svt,lv1,lv2,phil,eps,spec){
    const coef = 38, coeffre = 2, coeffro = 2, coefhg = 3, coeflv1 = 3, coeflv2 = 2, coefphil = 3, coefeps = 2;
    if (spec === 'math'){
        const coefmath = 9,coefphys = 6,coefsvt = 6;
        return (math*coefmath + phys*coefphys + fro*coeffro + fre*coeffre + svt*coefsvt + lv1*coeflv1 + lv2*coeflv2 + eps*coefeps + hg*coefhg + phil*coefphil)/coef;
    }
    else if(spec === 'phys'){
        const coefmath = 7, coefphys = 8, coefsvt = 6;
        return (math*coefmath + phys*coefphys + fro*coeffro + fre*coeffre + svt*coefsvt + lv1*coeflv1 + lv2*coeflv2 + eps*coefeps + hg*coefhg + phil*coefphil)/coef;
    } else {
        const coefmath = 7, coefphys = 6, coefsvt = 8;
        return (math*coefmath + phys*coefphys + fro*coeffro + fre*coeffre + svt*coefsvt + lv1*coeflv1 + lv2*coeflv2 + eps*coefeps + hg*coefhg + phil*coefphil)/coef;
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
function supprime(id) {
    let el = window.document.querySelector('#' + id);
    if (el) {
        el.remove();
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
function getString(id) {
    return window.document.querySelector(id).value;
}