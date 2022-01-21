/**
* Template Name: Ninestars - v4.1.0
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";
  
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 

  //modal 09knqiudn-------------------------

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('#close1');
const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn2 = document.querySelector('#close2');

const modal3 = document.querySelector('#my-modal3');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn3 = document.querySelector('#close3');

// const modal4 = document.querySelector('#my-modal4');
// const modalBtn4 = document.querySelector('#modal-btn4');
// const closeBtn4 = document.querySelector('#close4');

const modal5 = document.querySelector('#my-modal5');
const modalBtn5 = document.querySelector('#modal-btn5');
const closeBtn5 = document.querySelector('#close5');


const modal7 = document.querySelector('#my-modal7');
//const modalBtn7 = document.querySelector('#modal-btn7');
const closeBtn7 = document.querySelector('#close7');
const modal8 = document.querySelector('#my-modal8');
//const modalBtn7 = document.querySelector('#modal-btn7');
const closeBtn8 = document.querySelector('#close8');
const modal9 = document.querySelector('#my-modal9');
const AppModal = document.querySelector('#AppModal');
const closeBtn9 = document.querySelector('#close9');
// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);

// modalBtn4.addEventListener('click', openModal4);
// closeBtn4.addEventListener('click', closeModal4);

modalBtn5.addEventListener('click', openModal5);
closeBtn5.addEventListener('click', closeModal5);

closeBtn7.addEventListener('click', closeModal7);
closeBtn8.addEventListener('click', closeModal8);
closeBtn9.addEventListener('click', closeModal9);
AppModal.addEventListener('click', appmodal);
//closeBtn.addEventListener('click', closeModal);
// Open
function openModal() {
  modal.style.display = 'block';
}
function openModal1() {
  modal1.style.display = 'block';
}
function openModal2() {
  modal2.style.display = 'block';
}
function openModal3() {
  modal3.style.display = 'block';
}
// function openModal4() {
//   modal4.style.display = 'block';
// }
function openModal5() {
  modal5.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  
}
function closeModal1() {
 
  modal1.style.display = 'none';
  
}
function closeModal2() {

  modal2.style.display = 'none';
}
function closeModal3() {

  modal3.style.display = 'none';
}
// function closeModal4() {

//   modal4.style.display = 'none';
// }
function closeModal5() {

  modal5.style.display = 'none';
}
function closeModal7() {
  modal7.style.display = 'none';
}
function closeModal8() {
  modal8.style.display = 'none';
}
function closeModal9() {
  modal9.style.display = 'none';
}
function appmodal() {
  modal8.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
  //  modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal7.style.display = 'none';
    modal8.style.display = 'none';
    modal9.style.display = 'none';
  }
}
  //-----------------
//radio buttons -------------------------
// $(document).ready(function(){
  
// });


  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


  on('click', '.submit', function(e) {
    console.log("clicked")
   // var radioValue = document.getElementById('f-option').checked;
   var checked_all = true;
   var count = 0;
    if(document.getElementById('f-option').checked || document.getElementById('s-option').checked){
        if(document.getElementById('f-option').checked){
            count = count+1
        }
    }
    else{
      checked_all = false;
    }
    if(document.getElementById('f-option1').checked || document.getElementById('s-option1').checked){
      if(document.getElementById('f-option1').checked){
          count = count+1
      }
  }
  else{
    checked_all = false;
  }
  if(document.getElementById('f-option2').checked || document.getElementById('s-option2').checked){
    if(document.getElementById('f-option2').checked){
        count = count+1
    }
}
else{
  checked_all = false;
}
if(document.getElementById('f-option3').checked || document.getElementById('s-option3').checked){
  if(document.getElementById('f-option3').checked){
      count = count+1
  }
}
else{
checked_all = false;
}
if(document.getElementById('f-option4').checked || document.getElementById('s-option4').checked){
  if(document.getElementById('f-option4').checked){
      count = count+1
  }
}
else{
checked_all = false;
}
if(document.getElementById('f-option5').checked || document.getElementById('s-option5').checked){
  if(document.getElementById('f-option5').checked){
      count = count+1
  }
}
else{
checked_all = false;
}
if(document.getElementById('f-option6').checked || document.getElementById('s-option6').checked){
  if(document.getElementById('f-option6').checked){
      count = count+1
  }
}
else{
checked_all = false;
}
if(document.getElementById('f-option7').checked || document.getElementById('s-option7').checked){
  if(document.getElementById('f-option7').checked){
      count = count+1
  }
}
else{
checked_all = false;
}
if(document.getElementById('f-option8').checked || document.getElementById('s-option8').checked){
  if(document.getElementById('f-option8').checked){
      count = count+1
  }
}
else{
checked_all = false;
}

if(checked_all == false){
  console.log("incomplete")
  modal9.style.display = 'block';
}
else{
  console.log(count)
  // document.getElementById('my-modal7').modal('show');
  if(count>2){
  modal8.style.display = 'block';
  }
  else{
    modal7.style.display = 'block';
  }
}
});

/* form 
    * ------------------------------------------------------ */
// var formstart = function() {
  $('.php-email-form').submit(function(e){
      // alert("Thank you for writing us. Hold on! We will get back to you in no time")
      console.log("messe....")
      $('.sent-message').empty();
       $('.sent-message').append('Submitting...');
      //  $('.subscribe-message1').append('Submitting...,...');
      e.preventDefault();
      $.ajax({
          url:'https://groziitmail.herokuapp.com/users/mahasvana_user',
          type:'post',
          data:$('form').serialize(),
          headers: {
              "Authorization": "Hk3IqZ3crESzStZOh3wfdlKLrta4K3R"
          },
          success:function(){
            $('form')[0].reset();
            $('.sent-message').empty();
            $('.sent-message').append('<i class="fa fa-check"></i> Thanks for booking an appointment with our clinic!');
          }
      });
  });
//}

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  // });

})()