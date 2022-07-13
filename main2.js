const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');

let theme;

window.addEventListener('DOMContentLoaded', () => {
  theme = localStorage.getItem('theme') || 'light';
  updateTheme();
});

toggleBtn.addEventListener('click', () => {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  updateTheme();
});

const updateTheme = () => {
  body.className = theme;
  toggleBtn.innerHTML = `<i class="fas fa-${
    theme === 'light' ? 'moon' : 'sun'
  }"></i>`;
  localStorage.setItem('theme', theme);
};