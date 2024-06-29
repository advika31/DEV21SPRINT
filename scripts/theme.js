//  THIS JS FILE IS MADE BY ADVIKA

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('darkmode-toggle');
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
      toggleSwitch.checked = true;
    }
  }

  toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });
});
