// Rechercher une recette parmis  celle du site
function rechercherRecette() {
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const recherche = searchInput.value.toLowerCase();
    const recettes = document.querySelectorAll(".container-recipes article");
    console.log("Nombre de recette trouvées!");

    recettes.forEach(function(recette){
        const nom = recette.textContent.toLowerCase();
        if (nom.includes(recherche)){
            recette.style.display ="";
         } else {
            recette.style.display = "none";
        }
    });
});
}

rechercherRecette();