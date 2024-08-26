function locomotiveAnimations() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimations();

function videocontainer(){
  var videocon = document.querySelector(".video-container");
  var playbtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x-85,
       top: dets.y-80,
    });
  });


  

}
videocontainer()
                /*------------navbarpage1Animation ------------*/ 
function navbarpage1Animation(){
  gsap.to(".nav-part1 #svg1",{
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0%",
      end: "top -5%",
      scrub: true,
      // markers:true
    }
    
  })
  
  gsap.to(".nav-part1 #svg2 ",{
    transform: "translateY(-100%)",
        opacity: 1,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            position: "fixed",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        }
    
  })
  
  gsap.from(" .nav-part2 a ",{
    y: -50,
    duration: .5,
    opacity: 0,
    scale: 1,
    dellay: .5,
    stagger: .2,
    
  })
  
  gsap.from(".page1 h1",{
    y: 200,
    stagger: .8,
    opacity: 0,
    delay: 1,
    duration: .9,
    stagger:.3, 
    scale: 1,
  })
  
  gsap.from(".page1 .video-container",{
    y: 100,
    opacity: 0,
    delay: 1.5,
    duration: 0.9
  })
}
navbarpage1Animation()
                           /*-------------------Cursor Animation -------------*/  
function cursorAnimation() {
  
  // Ensure that the cursor follows the mouse within the .page3 container
  document.addEventListener("mousemove", function(event) {
    const cursor = document.querySelector(".cursor");
    
    // Update cursor position with scroll offset
    gsap.to(cursor, {
        x: event.clientX + window.scrollX, // Adjust for horizontal scroll
        y: event.clientY + window.scrollY, // Adjust for vertical scroll
        duration: 0.1, // Smooth movement
        ease: "power2.out" // Optional smooth easing
    });
});

// Optional: Ensure cursor remains accurate when scrolling
window.addEventListener("scroll", function() {
    const cursor = document.querySelector(".cursor");
    
    // Calculate the new position based on scroll
    gsap.to(cursor, {
        x: cursor.offsetLeft + window.scrollX,
        y: cursor.offsetTop + window.scrollY,
        duration: 0.1,
        ease: "power2.out",
        transform: 'translate(-50%, -50%)',

    });
});

  
  
  

// Apply color change effect on child elements within .page3
document.querySelectorAll(" .child").forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
      const cursor = document.querySelector(".cursor");
      const bgColor = elem.getAttribute("data-color");
      
      gsap.to(cursor, {
          backgroundColor: bgColor,
          transform: 'translate(-50%, 80%)',
      });
  });

  elem.addEventListener("mouseleave", function() {
      const cursor = document.querySelector(".cursor");

      gsap.to(cursor, {
          backgroundColor: 'transparent',
          transform: 'translate(-50%, 10%)',
      });
  });
});

}
cursorAnimation(); 

      /* black page ka code */

let donate = document.querySelector(".donate"); 
let cross = document.querySelector("#cross")     
let fullpage = document.querySelector(".full-page")

let gripline  = document.querySelector('.grip-lines')
let crosspart2 = document.querySelector('#cross-part2')

let shopping= document.querySelector('.shopping')
let crosspart3 = document.querySelector('#cross-part3')
                            /*shopping per click or shopping cart ka code hai*/ 
shopping.addEventListener('click',function(e){
  gsap.to('.shopping-cart',{
    y:'100vh',
    duration:.5,
  })
})
crosspart3.addEventListener('click',function(e){
  gsap.to('.shopping-cart ',{
    y:'-100vh',
    duration:.5,
  })
})
                          /*donate per click or full-page ka code hai*/  
donate.addEventListener("click", function(e) {
  console.log('clicked')
    gsap.to('.full-page',{
      y:'100vh',
      duration:.5,
    })
})

cross.addEventListener('click',function(e){
  gsap.to('.full-page ',{
    y:'-100vh',
    duration:.5,
  })
})
                            /*gripline per click or menu-page ka code hai*/ 
gripline.addEventListener('click',function(e){
  gsap.to('.menu-page',{
    y:'100vh',
    duration:.5,
  })
})
crosspart2.addEventListener('click',function(e){
  gsap.to('.menu-page ',{
    y:'-100vh',
    duration:.5,
  })
})





   
   
