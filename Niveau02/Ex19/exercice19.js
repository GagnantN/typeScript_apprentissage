// 1️⃣ Sélection du bouton
var bouton = document.getElementById("monBouton");
// 2️⃣ Vérification que le bouton existe (pour éviter les erreurs)
if (bouton) {
    // 3️⃣ Ajouter un écouteur d'événement pour le clic
    bouton.addEventListener("click", function () {
        alert("Bonjour ! Tu as cliqué sur le bouton.");
    });
}
