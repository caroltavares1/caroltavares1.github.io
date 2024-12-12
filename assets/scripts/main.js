// Select the button
const btn = document.querySelector('.theme-button');


// Listen for a click on the button
btn.addEventListener('click', function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  const icon = document.querySelector('#theme-icon')
  icon.classList.toggle('bi-sun')
  icon.classList.toggle('bi-moon-stars')

  console.log(icon)

})