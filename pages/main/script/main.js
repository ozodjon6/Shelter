'use strict';

var petsList = [

    {
        "name": "Jennifer",
        "img": "../../assets/img/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/img/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/img/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/img/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/img/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/img/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/img/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/img/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

(function () {

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        // direction: "vertical",
        loop: true,
        slidesPerView: 3,
        spaceBetween: 90,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
    
        // Navigation arrows
        navigation: {
          nextEl: ".page-slide__nav-btn_right",
          prevEl: ".page-slide__nav-btn_left",
        },
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
    
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 90,
            slidesPerGroup: 3,
          },
        },
      });

})();

const humburgerBtn = document.querySelector('.humburger');
const openMenu = document.querySelector('.page-header__top');
const petBtn = document.querySelectorAll('.pet-slides__item');
const modalWindow = document.querySelector('.modal-window');
const modalClose = document.querySelector('.modal-window__close');


const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.append(overlay);

petBtn.forEach(function (petBtn) {
    petBtn.addEventListener('click', function () {
        modalWindow.classList.add('open');
        overlay.classList.add('open');
    })

    modalClose.addEventListener('click', function () {
        modalWindow.classList.remove('open');
        overlay.classList.remove('open');
    })

    overlay.addEventListener('click', function () {
        modalWindow.classList.remove('open');
        overlay.classList.remove('open');
    })
});


const openMobile = () => {
    openMenu.classList.toggle('active');
}

const closeMobile = () => {
    openMenu.classList.remove('active');
}

humburgerBtn.addEventListener('click', openMobile);


document.addEventListener('click', function (event) {
    let isClickInside = openMenu.contains(event.target);
    if (!isClickInside) {
        closeMobile();
    }
});



// Popup in slider cards
(function () {
    const popup = document.querySelector(".modal-window"),
      popupInner = document.querySelector(".animals-info");
  
    document.querySelector("#pets").addEventListener("click", function (e) {
      if (
        e.target.classList.contains("pet__btn") ||
        e.target.classList.contains("default-img") ||
        e.target.classList.contains("pet__body") ||
        e.target.classList.contains("pet__name")
      ) {
        e.preventDefault();
        const index = e.target.closest(".pet").dataset.index;
        const pet = petsList[index];
        const inolucations = pet["inoculations"];
        const diseases = pet["diseases"];
        const parasites = pet["parasites"];
  
        popupInner.innerHTML = `
            <div class="animals-info__pic">
              <img class="default-img" src="${pet.img}" alt="" />
            </div>
            <div class="animals-info__content">
              <div class="animals-info__name">${pet.name}</div>
              <div class="animals-info__sub">${pet.type} - ${pet.breed}</div>
              <div class="animals-info__body">${pet.description}</div>
              <ul class="info-list">
                <li class="info-list__item"><strong>Age</strong>: <span>${pet.age}</span></li>
                <li class="info-list__item"><strong>Inoculations</strong>: <span>${inolucations.join(
                  ", "
                )}</span></li>
                <li class="info-list__item"><strong>Diseases</strong>: <span>${diseases.join(", ")}</span></li>
                <li class="info-list__item"><strong>Parasites</strong>: <span>${parasites.join(", ")}</span></li>
              </ul>
            </div>
          `;
        // document.querySelector("html").classList.add("freeze");
        // document.querySelector("html").setAttribute("class", "freeze2");
        // popup.classList.add("active");
        // overlay.classList.add("active");
      }
    });
  
  
  })();