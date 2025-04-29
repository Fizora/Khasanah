const barButton = document.getElementById("barButton");
const navMobile = document.getElementById("navMobile");

barButton.addEventListener("click", () => {
  if (navMobile.classList.contains("hidden")) {
    navMobile.classList.remove("hidden");
    requestAnimationFrame(() => {
      navMobile.classList.remove("scale-y-0", "opacity-0");
      navMobile.classList.add("scale-y-100", "opacity-100");
    });
  } else {
    navMobile.classList.remove("scale-y-100", "opacity-100");
    navMobile.classList.add("scale-y-0", "opacity-0");
    navMobile.addEventListener(
      "transitionend",
      () => {
        navMobile.classList.add("hidden");
      },
      { once: true }
    );
  }
});
