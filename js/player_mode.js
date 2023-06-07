function ModeMenu() {
    var dropdownMenu = document.querySelector('.mode-menu');
    dropdownMenu.classList.toggle('show');
}

function LightMode() {
  var cssLink = document.querySelector('link[href="../css/player.css"]');
  cssLink.href = "../css/dark_player.css";

  var moreIcon = document.querySelector('.more img');
  moreIcon.src = "../src/interface/more_icon_w.png";

  var logoIcon = document.querySelector('.title img');
  logoIcon.src = "../src/interface/logo_w.png";

  var icon = document.querySelector('.user img');
  icon.src = "../src/interface/icon_w.png";

  var uploadIcon = document.querySelector('.upload img');
  uploadIcon.src = "../src/interface/upload_icon_w.png";

  var dislikeIcon = document.querySelector('.dislike_button img');
  dislikeIcon.src = "../src/interface/dislike_icon_w.png";

  var likeIcon = document.querySelector('.like_button img');
  likeIcon.src = "../src/interface/like_icon_w.png";
}

function DarkMode() {
  var cssLink = document.querySelector('link[href="../css/dark_player.css"]');
  cssLink.href = "../css/player.css";

  var moreIcon = document.querySelector('.more img');
  moreIcon.src = "../src/interface/more_icon_b.png";

  var logoIcon = document.querySelector('.title img');
  logoIcon.src = "../src/interface/logo_b.png";

  var icon = document.querySelector('.user img');
  icon.src = "../src/interface/icon_b.png";

  var uploadIcon = document.querySelector('.upload img');
  uploadIcon.src = "../src/interface/upload_icon_b.png";

  var dislikeIcon = document.querySelector('.dislike_button img');
  dislikeIcon.src = "../src/interface/dislike_icon_b.png";

  var likeIcon = document.querySelector('.like_button img');
  likeIcon.src = "../src/interface/like_icon_b.png";
}