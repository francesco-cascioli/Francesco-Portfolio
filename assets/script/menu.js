document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const links = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links a"); // Seleziona tutti i link della navbar
  
    if (menu && links) {
      menu.addEventListener("click", function () {
        links.classList.toggle("active");
      });
  
      // Chiude il menu quando si clicca su un link
      navLinks.forEach(link => {
        link.addEventListener("click", function () {
          links.classList.remove("active");
        });
      });
    } else {
      console.error("Errore: #menu o .links non trovati nel DOM");
    }
  });
  