function pressRightSlider() {
  slide(".cases__item", ".cases__list", -1510, false, "afterend");

  /* const cases = document.querySelectorAll(".cases__item");
  //console.log(cases[0].clientWidth);
  const casesList = document.querySelector(".cases__list");
  // console.log(casesList.style.left); //;
  casesList.classList.add("slider-animation");
  casesList.style.left = "-1510px";
  setTimeout(() => {
    casesList.classList.remove("slider-animation");
    cases[cases.length - 1].insertAdjacentHTML("afterend", cases[0].outerHTML);
    cases[0].remove();
    casesList.style.left = "-530px";
  }, 300);*/
}

function pressLeftSlider() {
  slide(".cases__item", ".cases__list", -1510, true, "beforebegin");
  /*const cases = document.querySelectorAll(".cases__item");
  const casesList = document.querySelector(".cases__list");
  //console.log(cases[0].clientWidth);
  casesList.classList.add("slider-animation");
  casesList.style.left = "450px";
  setTimeout(() => {
    casesList.classList.remove("slider-animation");
    cases[0].insertAdjacentHTML(
      "beforebegin",
      cases[cases.length - 1].outerHTML
    );
    cases[cases.length - 1].remove();
    casesList.style.left = "-530px";
  }, 300);*/
}

function slide(itemName, listName, offset, left, insertName, listWidth) {
  const item = document.querySelectorAll(itemName);
  const list = document.querySelector(listName);
  list.classList.add("slider-animation");
  const itemWidth = listWidth ? list.clientWidth : item[0].clientWidth;
  const leftOffset = left ? offset + itemWidth : offset - itemWidth;
  //  console.log(leftOffset);
  list.style.left = leftOffset + "px";
  setTimeout(() => {
    list.classList.remove("slider-animation");
    let insertNumber = 0;
    let deleteNumber = 0;
    left ? (deleteNumber = item.length - 1) : (insertNumber = item.length - 1);
    const insItem = left ? item.length - 3 : 2;
    console.log(deleteNumber, insertNumber);
    item[insertNumber].insertAdjacentHTML(insertName, item[insItem].outerHTML);
    item[deleteNumber].remove();
    list.style.left = offset + "px";
  }, 300);
}

function clientsSlider() {
  const cases = document.querySelectorAll(".cases__item");
  const list = document.querySelector(".cases__list");
  //можно добавитб медленную анимацию и запустить все именно при долистывании, чтобы появильсь и кнопки и изображения

  //list.classList.add("slider-animation");
  const clientOffset = cases[0].clientWidth + cases[0].clientWidth / 2 + 30;
  list.style.left = "-" + clientOffset + "px";
  cases[0].insertAdjacentHTML("beforebegin", cases[cases.length - 1].outerHTML);
  cases[cases.length - 1].insertAdjacentHTML("afterend", cases[0].outerHTML);
  //slide(".clients__item", ".clients__list", 0, false, "afterend", false);

  const reviewsItem = document.querySelectorAll(".customer-reviews__item");
  const reviewsList = document.querySelector(".customer-reviews__list");
  reviewsList.style.left = "-" + reviewsList.clientWidth + "px";

  reviewsItem[0].insertAdjacentHTML(
    "beforebegin",
    reviewsItem[reviewsItem.length - 1].outerHTML
  );
  reviewsItem[reviewsItem.length - 1].insertAdjacentHTML(
    "afterend",
    reviewsItem[0].outerHTML
  );

  const clients = document.querySelectorAll(".clients__item");
  clients[clients.length - 1].insertAdjacentHTML(
    "afterend",
    clients[0].outerHTML
  );
  clients[0].insertAdjacentHTML(
    "beforebegin",
    clients[clients.length - 1].outerHTML
  );

  setTimeout(function clientSlide() {
    slide(".clients__item", ".clients__list", 0, false, "afterend");
    /*const clients = document.querySelectorAll(".clients__item");
    clientsList[0].classList.add("slider-animation");
    clientsList[0].style.left = "-" + clients[0].clientWidth + "px";
    //clientsList[0].style.transform = "translateX(-333px)";
    setTimeout(() => {
      clientsList[0].classList.remove("slider-animation");

      clients[clients.length - 1].insertAdjacentHTML(
        "afterend",
        clients[1].outerHTML
      );
      clients[0].remove();
      clientsList[0].style.left = "0";
    }
    , 300);
    //clientsList[0].style.left = "-" + clients[0].clientWidth + "px";*/

    setTimeout(clientSlide, 3000);
  }, 3000);

  //}, 1500);
}

function pressLeftReviewSlider() {
  slide(
    ".customer-reviews__item",
    ".customer-reviews__list",
    -930,
    true,
    "beforebegin",
    true
  );
}

function pressRightReviewSlider() {
  slide(
    ".customer-reviews__item",
    ".customer-reviews__list",
    -930,
    false,
    "afterend",
    true
  );
}

clientsSlider();

document
  .querySelectorAll(".button-left")
  .forEach((element) => element.addEventListener("click", pressLeftSlider));
document
  .querySelectorAll(".button-right")
  .forEach((element) => element.addEventListener("click", pressRightSlider));
document
  .querySelectorAll(".customer-reviews__button--left")
  .forEach((element) =>
    element.addEventListener("click", pressLeftReviewSlider)
  );
document
  .querySelectorAll(".customer-reviews__button--right")
  .forEach((element) =>
    element.addEventListener("click", pressRightReviewSlider)
  );
