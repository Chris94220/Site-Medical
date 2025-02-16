
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


   



//formulaire de rendez vous
document.getElementById('service').addEventListener('change', function() {
  const commentaireDiv = document.getElementById('commentaire');
  const service = this.value;

  
  if (service === 'autre') {
      commentaireDiv.style.display = 'block'; 
  } else {
      commentaireDiv.style.display = 'none';  
  }
});

//formulaire de paiement

document.getElementById('service').addEventListener('change', function () {
  const paiementForm = document.getElementById('paiement-form');
  const validerBtn = document.getElementById('valider-btn');

  if (this.value === 'maintenant') {
      paiementForm.style.display = 'block';
      validerBtn.disabled = true;
  } else {
      paiementForm.style.display = 'none';
      validerBtn.disabled = false;
  }
});

// Activer le bouton "Valider" uniquement si le formulaire est correctement rempli
const paiementInputs = document.querySelectorAll('#paiement-form input');
paiementInputs.forEach(input => {
  input.addEventListener('input', () => {
      const allFilled = Array.from(paiementInputs).every(field => field.value.trim() !== '');
      document.getElementById('valider-btn').disabled = !allFilled;
  });
});


document.getElementById('monFormulaire').addEventListener('submit', function (e) {
  e.preventDefault();
  // Ici, vous pouvez éventuellement valider les données avant de continuer
  window.location.href = 'paiement.html';
});

