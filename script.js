const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		    <div class="carousel__nav">
			${buttonsHtml.join("")}
		      </div>
	  `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");



  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");

  let i = 0;
  setInterval(function () {

    const selected = document.querySelectorAll(".carousel__item");
    const btns = carousel.querySelectorAll(".carousel__button");

    if (i > 1) {
      i = 0;

    }
    selected.forEach((select) =>
      select.classList.remove("carousel__item--selected")
    );

    btns.forEach((btn) =>
      btn.classList.remove("carousel__button--selected")
    );

    selected[i].classList.add("carousel__item--selected");
    btns[i].classList.add("carousel__button--selected");

    i++;

  }, 5000)

});