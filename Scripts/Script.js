// Navbar Toggle Animations

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navToggleClose');
const navLink = document.querySelectorAll('.nav_link');
const genreLinks = document.querySelectorAll('#genreContainer a');

navToggle.addEventListener('click', () => {
    navMenu.style.left = '0';
});

navClose.addEventListener('click', () => {
    navMenu.style.left = '-100%';
});

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.style.left = '-100%';
    });
});

genreLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.style.left = '-100%';
    });
});


// Sign Up Form Display Animation

const loginBtn = document.getElementById('navLoginBtn');
const signUpForm = document.querySelector('.loginForm');
const signUpClose = document.querySelector('.loginMenuFormBtn');

loginBtn.addEventListener('click', () => {
    signUpForm.style.display = 'block';
});


// Carousel Animation

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideWidth = 100; // Adjust to your slide width in percentage

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  const translateXValue = -currentIndex * slideWidth;
  console.log(currentIndex)
  slides.forEach((slide)=>{
    slide.style.transform = `translateX(${translateXValue}%)`;
  })
}



function prevousSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    const translateXValue = -currentIndex * slideWidth;
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(${translateXValue}%)`;
    })
}

setInterval(nextSlide,3000)

const nextSlideBtn = document.getElementById('carouselNextBtn');
const preSlideBtn = document.getElementById('carouselPreBtn');

nextSlideBtn.addEventListener('click', nextSlide);
preSlideBtn.addEventListener('click',prevousSlide)


//Trending Btn Function

const track = document.getElementById('image-track');

window.addEventListener("pointerdown", e =>{
    track.dataset.pointerDownAt = e.pageX;
})


window.addEventListener("pointermove" , e =>{

    if(track.dataset.pointerDownAt === "0") return;


    const pointerDelta = parseFloat(track.dataset.pointerDownAt) - e.pageX;
          maxDelta = window.innerWidth/2;

    const percentage = (pointerDelta/maxDelta)*-100,
          nextPercentageUnconstrained  = parseFloat(track.dataset.prevPercentage)+percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
          track.dataset.percentage = nextPercentage;

    // track.style.transform = `translate(${nextPercentage+50}%,30%)`;

    track.animate({
        transform:`translate(${nextPercentage-50}% , -50%)`
    },{duration:1200,fill:"forwards"})

    for(const image of track.getElementsByClassName('image')){
        // image.style.objectPosition = `${nextPercentage+100} 50%`;

        image.animate({
            objectPosition:`${100+nextPercentage}% center`
        },{duration:1200,fill:"forwards"})

    }
})




window.addEventListener( "pointerup",() =>{
    track.dataset.pointerDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
})


// Latest hidden menu popUp 
const latestSectionItems = document.querySelectorAll('.latestCardItem');
const latestHoveMenu = document.getElementById('lastHiddenMenu');



latestSectionItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
       if(latestHoveMenu.style.display == 'none'){
        latestHoveMenu.style.display = 'block';
        latestHoveMenu.style.top = `${item.offsetTop+20}px`;
        latestHoveMenu.style.left = `${item.offsetLeft+item.offsetWidth+20}px`;
       }
       else{
        latestHoveMenu.style.display = 'none';
       }
    });

    item.addEventListener('mouseout', () => {
        latestHoveMenu.style.display = 'none';
    });
});

// NewAdded hidden menu popUp

const newAddedSectionItems = document.querySelectorAll('.newAddedCardItem');
const newAddedHoverMenu = document.getElementById('newAddedHoverHiddenMenu');        

newAddedSectionItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
       if(newAddedHoverMenu.style.display == 'none'){
        newAddedHoverMenu.style.display = 'block';
        newAddedHoverMenu.style.top = `${item.offsetTop+20}px`;
        newAddedHoverMenu.style.left = `${item.offsetLeft+item.offsetWidth+20}px`;
       }
       else{
        newAddedHoverMenu.style.display = 'none';
       }
    });

    item.addEventListener('mouseout', () => {
        newAddedHoverMenu.style.display = 'none';
    });
});


// Upcomming hidden menu popUp


const upcomCardItem = document.querySelectorAll('.upcomminAnimeCardItem');
const upcomHoverMenu = document.getElementById('upcomAnimeHoverHiddenMenu');        

upcomCardItem.forEach((item) => {
    item.addEventListener('mouseover', () => {
       if(upcomHoverMenu.style.display == 'none'){
        upcomHoverMenu.style.display = 'block';
        upcomHoverMenu.style.top = `${item.offsetTop+20}px`;
        upcomHoverMenu.style.left = `${item.offsetLeft+item.offsetWidth+20}px`;
       }
       else{
        upcomHoverMenu.style.display = 'none';
       }
    });

    item.addEventListener('mouseout', () => {
        upcomHoverMenu.style.display = 'none';
    });
});
