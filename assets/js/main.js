function start() {
  activeNavMobile()
  templateMenuSlider()
  sliderHeader()
  animationScroll()
  scrollAddClass()
  addComment()
  listImageLinks()
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
      const adbox = entry.target.querySelectorAll('.advertise__box')
      if (entry.isIntersecting) {
        square.forEach((el) => {
          el.classList.add('boximg-animation')
        })
        adbox.forEach((el) => {
          el.classList.add('animate')
        })
        return
      }
      square.forEach((el) => {
        el.classList.remove('boximg-animation')
      })
      adbox.forEach((el) => {
        el.classList.remove('animate')
      })
    })
  })
  observer.observe(document.querySelector('.layout__image-boximg1'))
  observer.observe(document.querySelector('.layout__image-boximg2'))
  observer.observe(document.querySelector('.advertise'))
}
//RenderSize

//Render Products
function renderProductsBestSeller() {
  let newProducts = products.filter((product) => {
    return product.category === 'best-sellers'
  })
  let newProducts2 = products.filter((product) => {
    return product.category === 'trending'
  })
  newProducts.forEach((val) => {
    let template = `
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
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
                      </ul>
                    </div>
                    <div class="products__list-size flex a-center j-center">
                      <ul class="flex a-center j-center">               
                      </ul>
                    </div>
                   <div class="products__list-itembutton">
                      <div class="btn">
                        <span> <i class="ph-handbag"></i>ADD TO CART</span>
                      </div>
                  </div>
                  </div> 
                  
                </div>
              </div>`
    document
      .querySelector('.products__list-boxitem[data-category="best-sellers"]')
      .insertAdjacentHTML('beforeend', template)

    val.size.forEach(function (el) {
      let template2 = `<li><a href="">${el}</a></li>`
      document
        .querySelectorAll('.products__list-size ul')
        [val.id].insertAdjacentHTML('beforeend', template2)
    })
    val.urlImage2.forEach(function (el) {
      let template2 = `<li>
        <a href=""><img src="${el}" alt=""/></a>
      </li>`
      document
        .querySelectorAll('.pattern ul')
        [val.id].insertAdjacentHTML('beforeend', template2)
    })
    document
      .querySelectorAll('.pattern ul li:first-child a')
      [val.id].classList.add('active')
  })
  newProducts2.forEach((val) => {
    let template = `
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
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
                    class="products__list-description  trending flex a-center j-center"
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
                      </ul>
                    </div>
                    <div class="products__list-size flex a-center j-center">
                      <ul class="flex a-center j-center">               
                      </ul>
                    </div>
                   <div class="products__list-itembutton">
                      <div class="btn">
                        <span> <i class="ph-handbag"></i>ADD TO CART</span>
                      </div>
                  </div>
                  </div> 
                  
                </div>
              </div>`
    document
      .querySelector('.products__list-boxitem[data-category="trending"]')
      .insertAdjacentHTML('beforeend', template)
  })
}
renderProductsBestSeller()

//Scroll to add class
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

//Add class handlerclick

function addClassHandler() {
  let btnPatern = document.querySelectorAll('.pattern ul')
  let btnSize = document.querySelectorAll('.products__list-size ul')
  let btnMenuFooter = document.querySelectorAll('.footer__item')
  //Add active Pattern class
  btnPatern.forEach((btn) => {
    btn.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', (e) => {
        btn.querySelectorAll('li a').forEach((a) => {
          a.classList.remove('active')
        })
        e.preventDefault()
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active')
        }
      })
    })
  })

  //Add active Size class
  btnSize.forEach((btn) => {
    btn.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', (e) => {
        btn.querySelectorAll('li a').forEach((a) => {
          a.classList.remove('active')
        })
        e.preventDefault()
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active')
        }
      })
    })
  })

  btnMenuFooter.forEach((btn) => {
    btn.classList.remove('active')
    btn.addEventListener('click', (e) => {
      btnMenuFooter.forEach((a) => {})
      e.preventDefault()
      if (!btn.classList.contains('active')) {
        btn.classList.add('active')
      } else {
        btn.classList.remove('active')
      }
    })
  })
}
addClassHandler()

//List comments
function addComment() {
  const comments = [
    {
      urlImage: 'assets/img/cm1.jpg',
      tag: 'Ladies',
      title: 'Catalogue Mode',
      content:
        'It is a long established fact that by the readable contentof a page when looking at its layout.',
      authorName: 'Diego Lopez',
      quantity: '25',
    },
    {
      urlImage: 'assets/img/cm2.jpg',
      tag: 'WOKIEE',
      title: 'COUNTDOWN TIMEZONE',
      content:
        'It is a long established fact that by the readable contentof a page when looking at its layout.',
      authorName: 'Diego Lopez',
      quantity: '17',
    },
    {
      urlImage: 'assets/img/cm3.jpg',
      tag: 'PROMO',
      title: 'PURCHASED PROMO SECTION',
      content:
        'It is a long established fact that by the readable contentof a page when looking at its layout.',
      authorName: 'Diego Lopez',
      quantity: '10',
    },
  ]
  comments.forEach((val) => {
    let template = `
      <div class="blog__list-item">
        <div class="blog__list-item-image">
          <img src="${val.urlImage}" alt="" />
        </div>
        <div class="blog__list-item-content">
          <div class="tag">${val.tag}</div>
          <div class="title">${val.title} Mode</div>
          <div class="content">${val.content}</div>
          <div class="author flex a-center j-center">
            <div class="author-name">
              by <span>${val.authorName}</span> on June 21, 2018
            </div>
            <div class="author-quantity">
              <i class="ph-chat-circle"></i> ${val.quantity}
            </div>
          </div>
        </div>
      </div>`
    document
      .querySelector('.blog__list .container')
      .insertAdjacentHTML('beforeend', template)
  })
}

//List image links
function listImageLinks() {
  let listimages = [
    {
      id: 0,
      urlImage: 'assets/img/ig1.jpg',
    },
    {
      id: 1,
      urlImage: 'assets/img/ig2.jpg',
    },
    {
      id: 2,
      urlImage: 'assets/img/ig3.jpg',
    },
    {
      id: 3,
      urlImage: 'assets/img/ig4.jpg',
    },
    {
      id: 4,
      urlImage: 'assets/img/ig5.jpg',
    },
    {
      id: 5,
      urlImage: 'assets/img/ig6.jpg',
    },
  ]
  listimages.forEach((val) => {
    let template = `
    <div class="image__list-item">
      <img src="${val.urlImage}" alt="" />
      <div class="image__list-item-wrapper">
        <i class="ph-instagram-logo"></i>
      </div>
    </div>
    `
    document
      .querySelector('.image__list')
      .insertAdjacentHTML('beforeend', template)
  })
}
