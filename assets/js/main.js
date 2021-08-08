function start() {
  activeNavMobile()
  templateMenuSlider()
  sliderHeader()
}
start()

//Nav mobile
function activeNavMobile() {
  let navMoblie = document.querySelector('.header__mobile')
  let btnNavClose = document.querySelector('.btnNav-close')

  navMoblie.addEventListener('click', () => {
    if (!navMoblie.classList.contains('active')) {
      navMoblie.classList.add('active')
    }
  })

  btnNavClose.addEventListener('click', (e) => {
    e.preventDefault()
    navMoblie.classList.remove('active')
  })

  // $(document).on('click', '.btnNav-close', function (e) {
  //   e.preventDefault()
  //   navMoblie.classList.remove('active')
  // })
}

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

//Slider
function sliderHeader() {
  const sliderTemplate = [
    {
      caption: 'Multipurpose',
      title: 'Premium <br/> Shopify Theme',
      text: '30 skins, powerful features, great support, exclusive offer',
      urlImage: 'assets/img/slider1.png',
      buttonText: 'SHOP NOW!',
      classCheck2: '',
      classCheck: '',
    },
    {
      caption: 'Ready To',
      title: 'Use Unique <br/> Demos',
      text: 'Optimized for speed, website that sells',
      urlImage: 'assets/img/slider2.png',
      buttonText: 'SHOP NOW!',
      classCheck2: 'textColor',
      classCheck: '',
    },
    {
      caption: 'Oberlo',
      title: 'Find Products for <br/> Your Shop',
      text: 'Oberlo allows you to easily import dropshipped products directly into your ecommerce store',
      urlImage: 'assets/img/slider3.mp4',
      buttonText: 'SHOP NOW!',
      classCheck: 'video-call',
      classCheck2: 'textColor',
    },
  ]

  sliderTemplate.forEach((val) => {
    let template = ` 
    <div class="item flex j-center a-center">
      <div class="slider__image ${val.classCheck}">
        <img src="${val.urlImage}" alt="" />
        <video autoplay="true" loop>
              <source src="${val.urlImage}" type="video/mp4" />
        </video>
      </div>
      <div class="slider__content ${val.classCheck2}">
        <div class="slider__content-caption">${val.caption}</div>
        <div class="slider__content-title"> ${val.title} </div>
        <div class="slider__content-text"> ${val.text} </div>
        <div class="slider__content-button btn">${val.buttonText}</div>
      </div>
    </div>`
    document
      .querySelector('.slider .owl-carousel')
      .insertAdjacentHTML('beforeend', template)
  })

  $('.slider .owl-carousel').owlCarousel({
    loop: true,
    slideSpeed: 300,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    animateOut: 'fadeOut',
    lazyLoad: true,
  })
}
