function ModeMenu() {
    var dropdownMenu = document.querySelector('.mode-menu');
    dropdownMenu.classList.toggle('show');
}

function LightMode() {
  var cssLink = document.querySelector('link[href="../css/upload_player.css"]');
  cssLink.href = "../css/dark_upload_player.css";

  var moreIcon = document.querySelector('.more img');
  moreIcon.src = "../src/interface/more_icon_w.png";

  var logoIcon = document.querySelector('.title img');
  logoIcon.src = "../src/interface/logo_w.png";

  var icon = document.querySelector('.user img');
  icon.src = "../src/interface/icon_w.png";

  var uploadIcon = document.querySelector('.upload_button img');
  uploadIcon.src = "../src/interface/upload_icon_w.png";
}

function DarkMode() {
  var cssLink = document.querySelector('link[href="../css/dark_upload_player.css"]');
  cssLink.href = "../css/upload_player.css";

  var moreIcon = document.querySelector('.more img');
  moreIcon.src = "../src/interface/more_icon_b.png";

  var logoIcon = document.querySelector('.title img');
  logoIcon.src = "../src/interface/logo_b.png";

  var icon = document.querySelector('.user img');
  icon.src = "../src/interface/icon_b.png";

  var uploadIcon = document.querySelector('.upload_button img');
  uploadIcon.src = "../src/interface/upload_icon_b.png";
}