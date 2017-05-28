init = function () {
  let openCondo = function (event) {
    let condo = document.getElementById('Condos');
    condo.style.display = 'block';
  };

  let openMenu = function (event) {
    let landing = document.getElementById('Landing')
    landing.style.display = 'none';
    let menu = document.getElementById('MobileMenu');
    menu.style.display = "block";
    let residence = document.getElementById('ResidenceLink');
    residence.addEventListener('click', openCondo);
  };
  
  let burger = document.getElementById('Hamburger');
  burger.addEventListener('click', openMenu);
}
document.addEventListener('DOMContentLoaded', init)
