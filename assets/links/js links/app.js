// // account dropdown js
// let account = document.getElementById("account");
// account.addEventListener("click", (e) => {
//   let dropdown_account = document.getElementById("dropdown-account");
//   closeDrops();
//   dropdown_account.classList.toggle("account_show");
//   e.stopPropagation();
// });

// // usd dropdown js
// let usd = document.getElementById("usd");
// usd.addEventListener("click", (e) => {
//   let dropdown_usd = document.getElementById("dropdown-usd");
//   closeDrops();
//   dropdown_usd.classList.toggle("usd_show");
//   e.stopPropagation();
// });

// // en dropdown js
// let en = document.getElementById("en");
// en.addEventListener("click", (e) => {
//   let dropdown_en = document.getElementById("dropdown-en");
//   closeDrops();
//   dropdown_en.classList.toggle("en_show");
//   e.stopPropagation();
// });

// let menu = document.getElementById("menu-head");
// menu.addEventListener("click", (e) => {
//   let dropdown_menu = document.getElementById("dropdown-menu");
//   closeDrops();
//   dropdown_menu.classList.toggle("menu_show");
//   e.stopPropagation();
// });

// // close all the those dropdowns that they are currently opened by us
// function closeDrops() {
//   let drops = document.querySelectorAll(".drops");
//   drops.forEach((drop) => {
//     drop.classList.remove("account_show", "usd_show", "en_show");
//   });
// }
// // here we close all those dropdowns they are open as if we click any part of the page
// document.addEventListener("click", () => {
//   closeDrops();
// });

// // owl carousel start
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     nav: false,
//     loop: true,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//   });
// });
// // owl carousel end

// // home page animation
// AOS.init({
//   duration: 1000,
//   easing: "ease-out-cubic",
//   once: false,
// });

let show_sidebar = document.querySelector("#show_sidebar");
show_sidebar.addEventListener("click", (e) => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("sidebar_hide");
  let main = document.querySelector(".main").classList.toggle("main_width");
});
