// Select the button
const btn = document.querySelector('.theme-button');

// Carrega o tema salvo ou define o padrão
const savedTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(savedTheme);


// Listen for a click on the button
btn.addEventListener('click', function () {
  const currentTheme = document.body.classList[0]
  const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  localStorage.setItem('theme', newTheme); // Salva a preferência

  const icon = document.querySelector('#theme-icon')
  icon.classList.toggle('bi-sun')
  icon.classList.toggle('bi-moon-stars')

  console.log(document.body.classList[0])

})