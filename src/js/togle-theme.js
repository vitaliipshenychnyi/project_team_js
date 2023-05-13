const checkbox = document.querySelector('input[type="checkbox"]');

// перевіряємо, чи була вже встановлена попередня тема
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  checkbox.checked = savedTheme === 'dark'; // відмічаємо чекбокс, якщо вибрана темна тема
}

checkbox.addEventListener('change', changeTheme);

// функція змін теми
function changeTheme() {
  if (checkbox.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}




