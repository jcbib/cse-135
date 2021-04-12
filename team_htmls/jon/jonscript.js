function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
  document.getElementById("main").style.marginLeft = "240px";
  document.getElementById("mySidenav").style.backgroundColor = "#4A4E60";
  document.getElementById("my-icon").style.opacity = 1;
  document.getElementById("nav-bar").style.opacity = 1;
  document.getElementById("social-container").style.opacity = 1;
  document.getElementById("nav-button").onclick = closeNav;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "50px";
  document.getElementById("main").style.marginLeft = "50px";
  document.getElementById("mySidenav").style.backgroundColor = "#313745";
  document.getElementById("my-icon").style.opacity = 0;
  document.getElementById("nav-bar").style.opacity = 0;
  document.getElementById("social-container").style.opacity = 0;
  document.getElementById("nav-button").onclick = openNav;
}