// gsap.registerPlugin(ScrollTrigger);

//initial text animations for staggering animation on load
// this whole timeline is for the text and the button 
const tl = gsap.timeline();
tl.from('.main-text', {
  y: 40,
  opacity: 0,
  duration: 2,
  ease: 'power4.out',
  delay: 0.5,
  stagger: {
    amount: 0.5,
  },
});
tl.from(
  '.down-icon',
  { scale: 0, duration: 0.4, opacity: 0, ease: 'back' },
  '-=1.2'
);

//this tween is for the background animation
gsap.to('.cover', {
  opacity: 1,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top 20%',
    scrub: 0.5,
  },
});

// video fade animation
gsap.from('.video-placeholder', {
  opacity: 0,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top 50%', // the default values
    end: 'bottom bottom',
    scrub: 0.5,
  },
});

///////////////////////////////////////////////////////
//this is where the parallax animations starts

//this tween is to give the opacity animation for all texts at once
gsap.to('.main-text-container', {
  opacity: 0,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top 25%',
    scrub: 1,
  },
});

//these four animations are done separately to give the parallax effect
gsap.to('.logo', {
  yPercent: -500,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-text', {
  yPercent: -200,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-description', {
  yPercent: -180,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});
gsap.to('.title-button', {
  yPercent: -150,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.placeholder',
    start: 'top bottom', // the default values
    end: 'top top',
    scrub: 1,
  },
});


let tll=gsap.timeline({
  // onStart: () => {
  //   document.querySelector('.text-panel-title').style.opacity = '1';
  //   document.querySelector('.text-panel-title').classList.add('text-animate');
  // },
  scrollTrigger: {
    trigger: '#placeholder',
    start: 'top top',
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: () => '+=' + document.querySelector('#placeholder').offsetHeight,
    scrub: 0.4,
    pin: true,
    // anticipatePin: 1,
  },
  defaults: { ease: 'none' },
});
        
///////////////////////////////////////////////////////

let tl2 = gsap.timeline({
  // onStart: () => {
  //   document.querySelector('.text-panel-title').style.opacity = '1';
  //   document.querySelector('.text-panel-title').classList.add('text-animate');
  // },
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top',
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: () => '+=' + document.querySelector('.panel').offsetHeight*3.2,
    scrub: 0.4,
    pin: true,
    // anticipatePin: 1,
  },
  defaults: { ease: 'none' },
});

//text animation
const title = document.querySelector('.text-panel-title');
const desc = document.querySelector('.text-panel-description');
//1
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = 'Amphibian Decline';
    desc.textContent ="Since the mid-1900s, a strange flesh-eating fungus has spread across the world, infecting hundreds of different species of amphibians and condemning more species to extinction than any other pathogen ever recorded. This deadly disease descended into a global pandemic that has already wiped out over 90 species and caused declines in at least 501 frog and salamander species.";
  },
  width: '14.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
gsap.from('.text-panel-description', {
  opacity: 0,
  y: 15,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
//2
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = 'Chytridiomycosis';
    desc.textContent ="Chytridiomycosis is caused by the chytrid fungi Batrachochytrium dendrobatidis and Batrachochytrium salamandrivorans,a fungus-Batrachochytrium dendrobatidis-that eats the skin of frogs, toads, and other amphibians alive. Bd unspools the skin's proteins and feasts on the resulting spaghetti of amino acids. As it does, infected animals grow lethargic, shedding their skin in a death spiral and eventually die of a heart attack";
  },
  width: '14ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-2',
    start: 'top top', // the default values
    duration: 2,
    toggleActions: 'restart none restart reset',
  },
});
//3
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = "It's not just amphibians";
    desc.textContent =
      "Fungal diseases have been affecting bats with white-nose syndrome disease (WSN) disrupting the animal's hibernation and leaving millions dead in its path. Besides being major components of many food webs, these animals consume insects equating to hundreds of billions of dollars worth of pesticides and help reduce the spread of disease like malaria.";
  },
  //this width depends on the characters in the title
  width: '18.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-3',
    start:()=> '+=' + document.querySelector('.panel').offsetHeight, // the default values
    duration: 2,
    toggleActions: 'restart none restart restart',
  },
});
//4
gsap.to('.text-panel-title', {
  onStart: () => {
    title.textContent = "Globalization and Trade";
    desc.textContent =
      "The fungus spread with travel in the form of trade. However, testing at ports has been impossible since results are quite latent and expensive. In the wild, after capturing the animal, swabbing follows with the analysis done with either PCR or qPCR which but getting results takes 'ages'. Once confirmed, finding the patient again is impossible. Besides, wet lab procedures are riddled with complex steps that only trained personnel can engage with.";
  },
  //this width depends on the characters in the title
  width: '19.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.left-panel-4',
    start: () => '+=' + document.querySelector('.panel').offsetHeight*2, // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
  },
});
// text animation end//

tl2.addLabel('first', 0);
tl2.addLabel('second', 1);
tl2.addLabel('third',2);
// animate the container one way...
tl2
  .fromTo('.right-panel-2', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'first')
  // ...and the image the opposite way (at the same time)
  .fromTo('.background-5', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'first')

  .fromTo('.left-panel-2', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.background-2', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.right-panel-3', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.background-6', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.left-panel-3', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'second')

  .fromTo('.background-3', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'second')

 .fromTo('.right-panel-4', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.background-7', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.left-panel-4', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'third')

  .fromTo('.background-4', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'third');

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slider-background',
    start: 'top top',
    end: () => '+=' + document.querySelector('.slider-background').offsetHeight,
    scrub: 0.4,
    pin: true,
    anticipatePin: 1,
  },
});

tl3
  .fromTo(
    '.slider-background-container',
    { xPercent: 0, x: 0 },
    { xPercent: -100 }
  )
  .fromTo(
    '.slider-background-image',
    { xPercent: 0, x: 0 },
    { xPercent: 50 },
    0
  );





// Second shuffling cards section



let tl4 = gsap.timeline({
  // onStart: () => {
  //   document.querySelector('.text-panel-title').style.opacity = '1';
  //   document.querySelector('.text-panel-title').classList.add('text-animate');
  // },
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top',
    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    end: () => '+=' + document.querySelector('.second-panel').offsetHeight*3.2,
    scrub: 0.4,
    pin: true,
    // anticipatePin: 1,
  },
  defaults: { ease: 'none' },
});

//text animation
const title_2 = document.querySelector('.second-text-panel-title');
const desc_2 = document.querySelector('.second-text-panel-description');
//1
gsap.to('.second-text-panel-title', {
  onStart: () => {
    title_2.textContent = 'Fungal Diagnostics';
    desc_2.textContent ="1) Swab an animal at the point of capture/care";
  },
  width: '16ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
gsap.from('.second-text-panel-description', {
  opacity: 0,
  y: 15,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-panel',
    start: 'top top', // the default values
    duration: 1,
    toggleActions: 'restart none restart reset',
  },
});
//2
gsap.to('.second-text-panel-description', {
  onStart: () => {
    desc_2.innerHTML ="1) Swab an animal at the point of capture/care <br/><br/> 2) Insert the swabbed specimen to our device";},
  ease: 'power1.out', 
  scrollTrigger: {
    trigger: '.second-left-panel-2',
    start: 'top top', // the default values
    duration: 2,
    toggleActions: 'restart none restart reset',
    // markers: true,
  },
});
//3
gsap.to('.second-text-panel-description', {
  onStart: () => {
    desc_2.innerHTML ="1) Swab an animal at the point of capture/care <br/><br/> 2) Insert the swabbed specimen to our device <br/><br/>  3) Receive the result back in 30-60 minutes";
  },
  //this width depends on the characters in the title
  //width: '18.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-left-panel-3',
    start:() => '+=' + document.querySelector('.panel').offsetHeight , // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    //markers: true,
  },
});

gsap.to('.second-text-panel-description', {
  onStart: () => {
    desc_2.innerHTML ="1) Swab an animal at the point of capture/care <br/><br/> 2) Insert the swabbed specimen to our device <br/><br/> 3) Receive the result back in 30-60 minutes <br/><br/> 4) Retriever the results in various devices using our API";
  },
  //this width depends on the characters in the title
  //width: '18.5ch',
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.second-left-panel-4',
    start:() => '+=' + document.querySelector('.panel').offsetHeight*2 , // the default values
    duration: 1,
    toggleActions: 'restart none restart restart',
    //markers: true,
  },
});
// text animation end//

tl4.addLabel('first', 0);
tl4.addLabel('second', 1);
tl4.addLabel('third', 2);
// animate the container one way...
tl4
  .fromTo('.second-right-panel-2', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'first')
  // ...and the image the opposite way (at the same time)
  .fromTo('.second-background-5', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'first')

  .fromTo('.second-left-panel-2', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.second-background-2', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'first')

  .fromTo('.second-right-panel-3', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.second-video-background-6', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'second')

  .fromTo('.second-left-panel-3', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'second')

  .fromTo('.second-background-3', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'second')

  .fromTo('.second-right-panel-4', { xPercent: -100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.second-video-background-7', { xPercent: 100, x: 0 }, { xPercent: 0 }, 'third')

  .fromTo('.second-left-panel-4', { yPercent: 100, y: 0 }, { yPercent: 0 }, 'third')

  .fromTo('.second-background-left-4', { yPercent: -100, y: 0 }, { yPercent: 0 }, 'third');


// hover animation on video
const text = document.querySelector('.video-text')
document.querySelector('.video-placeholder').addEventListener('mouseover', () => {
  text.classList.add('video-text-visible');
})
document.querySelector('.video-placeholder').addEventListener('mouseout', () => {
  text.classList.remove('video-text-visible');
})


// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "CRISPR", "Point of Care", "Bead beating", "Rapid", "Chytridiomycosis", "Field Usage", "RPA", "Silica Matrices", "White-nose syndrome", "LFA", "Florescence", "Batrachochytrium dendrobatidis", "Magnetic Extraction", "Silica Matrices", "Sonication", "Microfluidics", "Batrachochytrium salamandrivorans"
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else { 
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}