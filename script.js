// JavaScript for handling dropdown interactions if needed
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseover', () => {
  document.querySelector('.dropdown-content').style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  document.querySelector('.dropdown-content').style.display = 'none';
});
