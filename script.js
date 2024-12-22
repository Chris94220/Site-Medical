
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
