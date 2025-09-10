// navbar, login & sign up
const navItem = document.querySelectorAll(".navbar-group > .navbar-item");

navItem.forEach((nav) => {
    const navDown = nav.querySelector(".navbar-down");
    if (navDown) {
        nav.addEventListener("mouseenter", () => {
            navDown.classList.add("navbar-expand");
        });
        nav.addEventListener("mouseleave", () => {
            navDown.classList.remove("navbar-expand");
        });
    }
});


const menuToggle = document.querySelector(".navbar-toggle");

menuToggle.addEventListener("click", (e) => {
    document.querySelector(".navbar-group").classList.toggle("navbar-expand");
    document.querySelector(".navbar-action").classList.toggle("navbar-expand");

    e.target.classList.toggle("navbar-expand");
});



// like animasi
document.querySelectorAll(".like-icon").forEach(likeIcon => {
  const likeCount = likeIcon.querySelector(".like-count");

  likeIcon.addEventListener("click", () => {
    likeIcon.classList.toggle("liked");

    let count = parseInt(likeCount.textContent);
    if (likeIcon.classList.contains("liked")) {
      likeCount.textContent = count + 1;
    } else {
      likeCount.textContent = count - 1;
    }
  });
});
