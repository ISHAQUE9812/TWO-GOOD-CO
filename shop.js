function arrows(){
  let arrow=document.querySelector('.arrow')
arrow = document.addEventListener('click',function(){
  console.log('click')
  gsap.to('.arrow',{
    rotate:180,
    
  })
  gsap.to('.hidden-page',{
    y:'350vh',
    opacity:1,
    overflow: hidden,
  })

})

}
arrows()

// Select the cursor element
const cursor = document.querySelector('.cursor');

// Basic cursor movement across the page
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
    });
});

// Adding hover effect for the items with the 'circle-all' class
document.querySelectorAll(".circle-all").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        const bgColor = elem.getAttribute("data-color");

        gsap.to(cursor, {
            backgroundColor: bgColor,
            scale: 1.5, // Optional: Enlarge cursor on hover
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    elem.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            backgroundColor: 'transparent',
            scale: 1, // Reset to original size
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});


                    /*gripline per click or menu-page ka code hai*/ 

let gripline  = document.querySelector('.grip-lines')
let crosspart2 = document.querySelector('#cross-part2')

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

                        /*shopping per click or shopping cart ka code hai*/ 
let shopping= document.querySelector('.shopping')
let crosspart3 = document.querySelector('#cross-part3')
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
let donate = document.querySelector(".donate"); 
let cross = document.querySelector("#cross")     
let fullpage = document.querySelector(".full-page")
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