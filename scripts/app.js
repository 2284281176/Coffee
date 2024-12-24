// Nav Menu - 
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

// Nav Shopping-cart
const cartOpenBtn = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart')
const cartCloseBtn = document.querySelector('.cart-close-btn')

// افزودن رویداد کلیک به دکمه‌ها
const toggleThemeBtns = document.querySelectorAll('.toggle-theme');

// تنظیم تم بر اساس localStorage هنگام بارگذاری صفحه
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

toggleThemeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});


// Nav Menu - Shapping cart

submenuOpenBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu--open");
})
navOpenBtn.addEventListener("click",() => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay--visible");
  
})


function closeNav() {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--visible");
}

navCloseBtn.addEventListener("click",closeNav)
overlay.addEventListener("click",closeNav)

// Nav - cart-Shopping

cartOpenBtn.addEventListener('click', () => {
  cart.classList.remove("-left-64")
  cart.classList.add("left-0")
  overlay.classList.add("overlay--visible");
})

function closeCart() {
  cart.classList.remove("left-0");
  cart.classList.add("-left-64");
  overlay.classList.remove("overlay--visible");
}
cartCloseBtn.addEventListener('click', closeCart)

// Slider best-selling
// const swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
// });

 