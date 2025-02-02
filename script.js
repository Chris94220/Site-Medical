
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

//heure et date du formulaire




//validation du formulaire


document.getElementById('monFormulaire').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Logique de traitement des données ici si nécessaire
  window.location.href = 'paiement.html'; // Redirection après soumission
});


//formulaire de paiement
document.addEventListener('DOMContentLoaded', function () { // Attendre que la page soit complètement chargée
  const serviceSelect = document.getElementById('service');
  const paiementForm = document.getElementById('paiement-form');

  serviceSelect.addEventListener('change', function () {
      if (serviceSelect.value === 'maintenant') {
          paiementForm.style.display = 'block'; // ✅ Affiche le formulaire
      } else {
          paiementForm.style.display = 'none';  // ✅ Cache le formulaire
      }
  });
});
