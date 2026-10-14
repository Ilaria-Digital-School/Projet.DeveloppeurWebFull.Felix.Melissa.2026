console.log("Bonjour mon site fonctionne !")

const searchInput = document.querySelector("#searchInput");
console.log(searchInput);

searchInput.addEventListener("input", function() {
    console.log(searchInput.value);
})