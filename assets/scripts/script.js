const accordionContentBlock = document.querySelectorAll(
  ".display-content__block"
);

accordionContentBlock.forEach((content) => {
  const blockTitle = content.querySelectorAll(".display-content__block__title");
  const blockBody = content.querySelectorAll(".body");
  const blockIcon = content.querySelectorAll(".btn-icon");

  blockTitle.forEach((title, i) => {
    title.addEventListener("click", () => {
      accordionContentBlock.forEach((content) => {
        content.querySelector(".body").classList.remove("active");
        content.querySelector(".btn-icon").src =
          "./assets/images/icon-plus.svg";
      });
      blockIcon[i].src = "./assets/images/icon-minus.svg";
      blockBody[i].classList.add("active");
    });
  });
});
