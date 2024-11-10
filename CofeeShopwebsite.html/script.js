

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');

  menuBtn.addEventListener('click', function() {
      navList.classList.toggle('active'); // Toggle the 'active' class
  });
});
