function start() {
  activeNavMobile()
  templateMenuSlider()
}
start()
function activeNavMobile() {
  let navMoblie = document.querySelector('.header__mobile')
  navMoblie.addEventListener('click', () => {
    navMoblie.classList.contains('active')
      ? navMoblie.classList.remove('active')
      : navMoblie.classList.add('active')
  })
}
function limit(c) {
  return this.filter((x, i) => {
    if (i <= c - 1) {
      return true
    }
  })
}
Array.prototype.limit = limit
//Slider menu women
function templateMenuSlider() {
  products.forEach((el) => {
    let templateSlider = `
      <div class="item">
      <img
        src="${el.urlImage}"
        alt=""
        data-src="${el.urlImage}"
        class="owl-lazy"/>
      <div class="item__desc">
        <span class="item__desc-title">${el.name}</span>
        <p class="item__desc-price">$${el.price}.00</p>
      </div>
    </div>`
    document
      .querySelector('.owl-visible .owl-carousel')
      .insertAdjacentHTML('beforeend', templateSlider)
  })
  $('.header__listmenu .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      "<i class='ph-caret-left'></i>",
      "<i class='ph-caret-right'></i>",
    ],
    lazyLoad: true,
    items: 3,
  })
}
