document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const close = document.querySelector(".close");

  burger.addEventListener("click", function () {
    const nav = document.querySelector(".header__nav");
    nav.classList.toggle("nav-active");

    burger.classList.toggle("burger-toggle");
    close.classList.toggle("close-toggle");
  });

  close.addEventListener("click", function () {
    const nav = document.querySelector(".header__nav");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-toggle");
    close.classList.toggle("close-toggle");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const catalogueItems = document.querySelectorAll(".catalogue__item");
  const detailBlock = document.querySelector(".catalogue-detail");
  const detailClose = document.querySelector(".catalogue-detail__close");
  const detailTitle = document.querySelector(".catalogue-detail__title");
  const detailText = document.querySelector(".catalogue-detail__text");
  const detailImg = document.querySelector(".catalogue-detail__img");

  catalogueItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const title = item.querySelector(".catalogue__name").textContent;
      const imgSrc = item.querySelector(".catalogue__img").src;

      detailTitle.textContent = title;
      detailText.textContent = `Детальна інформація про ${title}.`;
      detailImg.src = imgSrc;

      detailBlock.style.display = "flex";
    });
  });

  detailClose.addEventListener("click", () => {
    detailBlock.style.display = "none";
  });
});
