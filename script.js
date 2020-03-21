// menu

let menu = document.getElementById('menu');
  menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');
        });

// slider

let slideIndex = 1;
showSlides ( slideIndex );
function plusSlide ( n ) {
  showSlides( slideIndex += n );
}
function showSlides ( n ) {
  let slides = document.getElementsByClassName("slide");
  if ( n > slides.length ) {
    slideIndex = 1;
  }
  if ( n < 1 ) {
    slideIndex = slides.length;
  }
  for ( let i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }
  slides[ slideIndex - 1 ].style.display = "block"
}

// phone stuff

let vertInv = document.querySelector('.vert-inv');
let vertOff = document.querySelector('.off-vert');
vertInv.addEventListener('click', () => {
  vertOff.classList.toggle('phone-off');
});
let horInv = document.querySelector('.hor-inv');
let horOff = document.querySelector('.off-hor');
horInv.addEventListener('click', () => {
  horOff.classList.toggle('phone-off');
});


// img highlight

let img = document.getElementById('image-container');
  img.addEventListener('click', (event) => {
    img.querySelectorAll('img').forEach(el => el.classList.remove('active-img'));
      event.target.classList.add('active-img');
        });
       
 // tabs switch

let tabs = document.getElementById('tabs-container');
tabs.addEventListener('click', (event) => {
  tabs.querySelectorAll('a').forEach(el => el.classList.remove('active-tab'));
  img.querySelectorAll('img').forEach(elem => elem.style.order = Math.floor(Math.random() + 0.26));
    event.target.classList.add('active-tab');
        });

// form stuff

let send = document.querySelector('.send');
let subject = document.querySelector('.subject');
let describe = document.querySelector('.describe');
let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let subj = document.querySelector('.subject').value.toString();
  let desc = document.querySelector('.describe').value.toString();
  if (subj != '') {
      subject.textContent = 'Subject: ' + subj;
  } else {
    subject.textContent = 'Without subject.';
  };
  if (desc != '') {
      describe.textContent = 'Description: ' + desc;
  } else {
      describe.textContent = 'Without description.';
  }
  let message = 'Message sent!'+ '\n'+ subject.textContent + '\n' + describe.textContent;
  alert(message);
  form.reset();
})

