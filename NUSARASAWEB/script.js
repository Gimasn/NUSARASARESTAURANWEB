// script.js

// Declare elements first
const navbarNav = document.querySelector('.navbar-nav'); 
const searchform = document.querySelector('.search-forum'); 
const searchBox = document.querySelector("#search-box"); 
const sb = document.querySelector("#search-button"); 
const hm = document.querySelector("#hamburger-menu"); 
const cartBtn = document.querySelector('#shopping-cart');
const cartBox = document.querySelector('#shopping-cart-box');

// Hamburger button click
hm.addEventListener('click', function(e) {
    e.preventDefault();
    navbarNav.classList.toggle('active'); 
    searchform.classList.remove('active'); // tutup search
    cartBox.classList.remove('active');    // tutup cart
});

// Search button click
sb.addEventListener('click', (e) => {
    e.preventDefault();
    searchform.classList.toggle('active');
    navbarNav.classList.remove('active'); // tutup nav
    cartBox.classList.remove('active');   // tutup cart
});

// Shopping cart button click
cartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cartBox.classList.toggle('active');
    navbarNav.classList.remove('active'); // tutup nav
    searchform.classList.remove('active'); // tutup search
});

// Klik di luar (untuk menutup nav, search, dan cart)
document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active'); 
    }
    if (!sb.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove('active'); 
    }
    if (!cartBtn.contains(e.target) && !cartBox.contains(e.target)) {
        cartBox.classList.remove('active');
    }
});



  // Ambil semua tombol "eye"
  const eyeIcons = document.querySelectorAll('.products-icons a:nth-child(2)');

  // Ambil modal dan tombol close
  const modal = document.getElementById('item-detail-modal');
  const closeModal = document.querySelector('.modal .close-icon');

  // Saat klik icon mata, tampilkan modal
  eyeIcons.forEach((eye) => {
    eye.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('show');
    });
  });

  // Saat klik tombol X, sembunyikan modal
  closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('show');
  });

  // Klik di luar modal-container juga menutup modal
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

