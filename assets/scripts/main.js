// Select the button
const btn = document.querySelector('.theme-button');

// Carrega o tema salvo ou define o padrão
const savedTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(savedTheme);

const savedThemeIcon = localStorage.getItem('theme-icon') || 'bi-moon-stars';
document.getElementById('theme-icon').classList.add(savedThemeIcon)


// Listen for a click on the button
btn.addEventListener('click', function () {
  const currentTheme = document.body.classList[0]
  const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

  const currentThemeIcon = document.getElementById('theme-icon').classList[1]
  console.log(document.getElementById('theme-icon').classList[1])
  const newThemeIcon = currentThemeIcon === 'bi-moon-stars' ? 'bi-sun' : 'bi-moon-stars';

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  const icon = document.querySelector('#theme-icon');
  icon.classList.add(newThemeIcon);
  icon.classList.remove(currentThemeIcon);

  localStorage.setItem('theme', newTheme); // Salva a preferência
  localStorage.setItem('theme-icon', newThemeIcon); // Salva a preferência

  console.log(document.getElementById('theme-icon').classList)

})