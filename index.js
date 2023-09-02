function myFunction() {
  var element = document.getElementById("search");
  if (element.style.display === "none") {
    element.style.display = "block";
    document.getElementById("search").style.animation =
      "dropDown 1.5s alternate 1";
  } else {
    element.style.display = "none";
  }
}

// let u =document.getElementsByClassName('cardsContainer');
// console.log(u);
// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });