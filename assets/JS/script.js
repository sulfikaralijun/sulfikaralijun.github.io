const box = document.querySelector('body');
var pressTimer;
const soundWarning = new Audio('assets/warning.mp3');
const header = document.querySelector('.header');
const icon = document.querySelector('header .fa');
const dropdown = document.querySelector('.dropdown-menu');
const dropdownLink = document.querySelector('.dropdown-menu a');
let isClick = false;

// Dropdown Menu
icon.addEventListener('click', () => {
  dropdown.classList.toggle('act-dropdown');
  
  if (dropdown.classList.contains('act-dropdown') || isClick) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
});

dropdownLink.onclick = function() {
  isClick = true;
};

// Header Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});


// Start warning PC
box.addEventListener('mousedown', function() {  
  pressTimer = setTimeout(function() {
    soundWarning.play();
    warning();
  }, 3000);
});

box.addEventListener('mouseup', function() {
  clearTimeout(pressTimer);
});

box.addEventListener('mouseleave', function() {
  clearTimeout(pressTimer);
});
// End warning PC

// Start warning mobile
box.addEventListener('touchstart', function(event) {
  event.preventDefault(); // Mencegah aksi default seperti scroll pada perangkat mobile
  pressTimer = setTimeout(function() {
    soundWarning.play();
    warning();
    // Panggil fungsi lain atau lakukan tindakan lain di sini
  }, 10000); // Waktu dalam milidetik sebelum tekanan dianggap sebagai tekanan lama
});

box.addEventListener('touchend', function() {
  clearTimeout(pressTimer);
});
// End warning mobile

function warning() {
  const warning = document.getElementById('warning');
  warning.style.display = 'block';
}
