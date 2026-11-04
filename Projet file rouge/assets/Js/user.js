class Utilisateur {
    constructor(nom, email, mdp, genre, pays, role) {
        this.nom = nom;
        this.email = email;
        this.mdp = mdp;
        this.genre = genre;
        this.pays = pays;
        this.role = role;
    }
}



function ajouterAdmin() {
    let amdin = new Utilisateur("Admin", "admin@gmail.com", "admin123", "femme", "France", "admin");
    let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].email == amdin.email) return;
    }
    utilisateurs.push(admin);
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

}

function sInscrire() {
    const inscriptionForm = document.getElementById("inscription-form");
    if (!inscriptionForm) return;

    inscriptionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let mdp = document.getElementById("mdp").value;


        let genre = document.querySelector('input[name=genre]:checked').value;
        let pays = document.getElementById("pays").value;

        let utilisateur = new Utilisateur(nom, email, mdp, genre, pays, "client");

        const utilisateurs = JSON.parse(localStorage.getItem("Utilisateurs")) || [];
        utilisateurs.push(utilisateur);
        localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

        inscriptionForm.reset();
        alert("Vous êtes inscrit avec succès !");
    })
};

function seConnecter() {
    const connexionForm = document.querySelector(" #form form "); //  #form pour pas casser mon CSS
    if (!connexionForm) return;

    connexionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let mdp = document.getElementById("password").value;

        const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
        console.log("email: " + email + "mdp" + mdp + "utilisateurs" + utilisateurs);
});
}

ajouterAdmin();
sInscrire();
seConnecter();

