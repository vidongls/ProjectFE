function start() {
  activeNavMobile()
  templateMenuSlider()
  sliderHeader()
  animationScroll()
  scrollAddClass()
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
        <video loop>
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

//Animation when scroll
function animationScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelectorAll('.box-image')
      if (entry.isIntersecting) {
        square.forEach((el) => {
          el.classList.add('boximg-animation')
        })
        return
      }
      square.forEach((el) => {
        el.classList.remove('boximg-animation')
      })
    })
  })
  observer.observe(document.querySelector('.layout__image-boximg1'))
  observer.observe(document.querySelector('.layout__image-boximg2'))
}
//RenderSize

//Render Products
function renderProductsBestSeller() {
  let newProducts = products.filter((product) => {
    return product.category === 'best-sellers'
  })

  newProducts.forEach((val) => {
    let template = `
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="products__list-item flex a-center j-center">
                  <div class="products__list-item-imagebox">
                    <img src="${val.urlImage}" alt="" />
                    <div class="label ${val.status}">${val.status}</div>
                    <div class="optionbox flex">
                      <a href=""><i class="ph-eye"></i></a>
                      <a href=""><i class="ph-heart-straight"></i></a>
                      <a href=""><i class="ph-git-diff"></i></a>
                    </div>
                  </div>
                  <div
                    class="products__list-description flex a-center j-center"
                  >
                    <div class="text-box flex a-center j-center">
                      <a class="title">${val.brand}</a>
                      <span class="rating ${val.rate}">
                        <div class="rate">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="unrate">
                          <i class="ph-star"></i>
                          <i class="ph-star"></i>
                          <i class="ph-star"></i>
                          <i class="ph-star"></i>
                          <i class="ph-star"></i>
                        </div>
                      </span>
                      <div class="itemname">
                        <a href="">${val.name}</a>
                      </div>
                      <div class="itemprice ${val.status}">
                        <span>$${val.price}.00</span>
                        <span class="itemprice-sale">
                          <a href="">${val.sale}</a>
                        </span>
                      </div>
                    </div>
                    <div class="pattern">
                      <ul class="flex j-center a-center">
                        <li class="active">
                          <a href=""
                            ><img src="assets/img/img02.jpg" alt=""
                          /></a>
                        </li>
                        <li>
                          <a href=""
                            ><img src="assets/img/img02.jpg" alt=""
                          /></a>
                        </li>
                        <li>
                          <a href=""
                            ><img src="assets/img/img02.jpg" alt=""
                          /></a>
                        </li>
                        <li>
                          <a href=""
                            ><img src="assets/img/img02.jpg" alt=""
                          /></a>
                        </li>
                        <li>
                          <a href=""
                            ><img src="assets/img/img02.jpg" alt=""
                          /></a>
                        </li>
                      </ul>
                    </div>
                    <div class="products__list-size flex a-center j-center">
                      <ul id='em' class="flex a-center j-center">               
                      </ul>
                    </div>
                   <div class="products__list-itembutton">
                      <div class="btn">
                        <span> <i class="ph-handbag"></i>ADD TO CART</span>
                      </div>
                  </div>
                  </div> 
                  
                </div>
              </div>
    
    `
    document
      .querySelector('.productbestseller .products__list-boxitem')
      .insertAdjacentHTML('beforeend', template)

    val.size.forEach(function (el) {
      let template2 = `<li><a href="">${el}</a></li>`
      document
        .querySelectorAll('.products__list-size ul')
        [val.id].insertAdjacentHTML('beforeend', template2)
    })
  })
}
// document.querySelector('.products__list-size ul').firstChild.className('active')
renderProductsBestSeller()

function scrollAddClass() {
  const navbar = document.querySelector('.header')
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      navbar.classList.add('fixed')
    } else {
      navbar.classList.remove('fixed')
    }
  })
}
