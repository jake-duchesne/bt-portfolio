function ready() {
  const buttons = document.querySelectorAll("#menu-close-button, #menu-open-button")
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");
  const content = document.querySelector("#mobile-menu");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      content.classList.toggle("hidden")
      menuOpenButton.classList.toggle("hidden")
      menuCloseButton.classList.toggle("hidden")
    });
  });
}

// Listen on turbo:load since we're using turbo
document.addEventListener("turbo:load", ready)
