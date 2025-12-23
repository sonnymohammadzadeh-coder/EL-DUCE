// ========================
// EL DUCE MAIN JS
// Handles Hamburger & Dropdown
// ========================

const dropdown = document.getElementById('dropdownMenu');

function toggleDropdown() {
  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
  }
}

// Optional: close dropdown if clicked outside
window.addEventListener('click', function(e) {
  const hamburger = document.querySelector('.hamburger');
  if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
