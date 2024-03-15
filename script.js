const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

// function page4Animation(){
//   var elemc = document.querySelector('#elem-container');
// var fixed = document.querySelector('#fixed-image');
// elemc.addEventListener('mouseenter', () => {
//   // alert("Hey");
//   fixed.style.display = 'block';
// });
// elemc.addEventListener('mouseleave', () => {
//   // alert("Hey");
//   fixed.style.display = 'none';
// });
// // var elem1 = document.querySelector("#elem1");
// // elem1.addEventListener("mouseenter",()=>{
// //     var image = elem1.getAttribute("data-image");
// //     // console.log(image);
// //     fixed.style.backgroundImage = `url(${image})`;
// // })
// var elems = document.querySelectorAll('.elem');
// // console.log(elems);
// elems.forEach(function (e) {
//   // console.log("heyhey");
//   // console.log(e);
//   e.addEventListener('mouseenter', function () {
//     var image = e.getAttribute('data-image');
//     // console.log(image);
//     fixed.style.backgroundImage = `url(${image})`;
//   });
// });
// }
// page4Animation();
function swiperAnimation(){
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
});
}
swiperAnimation();
function menuAnimation() {

  var menu = document.querySelector("nav h3")
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector("nav img")
  var flag = 0
  menu.addEventListener("click", function () {
      if (flag == 0) {
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
      } else {
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
      }
  })
}
menuAnimation();
function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}
loaderAnimation();