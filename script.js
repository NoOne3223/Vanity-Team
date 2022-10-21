// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          navbar.className = "bar" + " card" + " animate-top" + " white";
      } else {
          navbar.className = navbar.className.replace("card animate-top white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("show") == -1) {
          x.className += " show";
      } else {
          x.className = x.className.replace(" show", "");
      }
  }

function Dlink() {
  window.open("https://discord.gg/hhNcxzQQ4M");
}

function Ilink() {
  alert("Soon..");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

