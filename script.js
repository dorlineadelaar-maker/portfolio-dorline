// On récupère les éléments
const profilePic = document.getElementById("profile-pic");
const overlay = document.getElementById("image-overlay");

if (profilePic && overlay) {

  profilePic.addEventListener("click", () => {

    overlay.style.display = "flex";

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

  });

  overlay.addEventListener("click", () => {

    overlay.classList.remove("active");

    setTimeout(() => {
      overlay.style.display = "none";
    }, 300);

  });

}

// Quand on clique sur l'arrière-plan
overlay.addEventListener("click", () => {

  overlay.classList.remove("active");

  // on laisse le temps à l'animation de se fermer
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);

});

// animation apparition section about
const aboutSection = document.querySelector(".about-container");

window.addEventListener("scroll", () => {

  const position = aboutSection.getBoundingClientRect().top;

  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {

    aboutSection.classList.add("visible");

  }

});