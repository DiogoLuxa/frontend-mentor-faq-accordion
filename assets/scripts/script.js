// VARIABLES
const accordionContentBlock = document.querySelectorAll(
  ".display-content__block"
);
const accordionBlockTitle = document.querySelectorAll(
  ".display-content__block__title"
);
const accordionBlockContent = document.querySelectorAll(".content");
const accordionBlockIcon = document.querySelectorAll(".btn-icon");

// FUNCTIONS
function addActiveClass(index) {
  accordionBlockContent[index].classList.add("active");
}
function removeActiveClasses() {
  accordionBlockContent.forEach((content) => {
    content.classList.remove("active");
  });
}
function changeIconMinus(i) {
  accordionBlockIcon[i].src = "./assets/images/icon-minus.svg";
}
function changeIconPlus() {
  accordionBlockIcon.forEach((icon) => {
    icon.src = "./assets/images/icon-Plus.svg";
  });
}

// EVENT LISTENERS
accordionBlockTitle.forEach((title, i) => {
  title.addEventListener("click", () => {
    let expanded = title.getAttribute("aria-expanded") === "true" || false;
    title.setAttribute("aria-expanded", !expanded);
    removeActiveClasses();
    changeIconPlus();
    addActiveClass(i);
    changeIconMinus(i);
  });

  title.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let expanded = title.getAttribute("aria-expanded") === "true" || false;
      title.setAttribute("aria-expanded", !expanded);
      removeActiveClasses();
      changeIconPlus();
      addActiveClass(i);
      changeIconMinus(i);
    }
  });
});
