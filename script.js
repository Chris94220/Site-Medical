
// Sélectionne le bouton et récupère le thème actuel
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Applique le thème sauvegardé au chargement de la page
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

// Ajoute un événement pour changer de thème
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Applique le nouveau thème et sauvegarde la préférence
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});




//validation du formulaire


document.getElementById('monFormulaire').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Logique de traitement des données ici si nécessaire
  window.location.href = 'paiement.html'; // Redirection après soumission
});


//formulaire de rendez vous
document.getElementById('service').addEventListener('change', function() {
  const commentaireDiv = document.getElementById('commentaire');
  const service = this.value;

  // Afficher ou masquer la zone de commentaire en fonction du choix
  if (service === 'autre') {
      commentaireDiv.style.display = 'block'; // Affiche la zone de commentaire
  } else {
      commentaireDiv.style.display = 'none';  // Cache la zone de commentaire
  }
});

//formulaire de paiement

    // Écouteur d'événement sur le changement de sélection
    document.getElementById('service').addEventListener('change', function() {
      const paiementForm = document.getElementById('paiement-form');
      const service = this.value;

      // Si l'utilisateur choisit "Maintenant", afficher le formulaire de paiement
      if (service === 'maintenant') {
          paiementForm.style.display = 'block';
      } else {
          paiementForm.style.display = 'none';
      }
  });