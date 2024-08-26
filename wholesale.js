const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });
  
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
        left: dets.x - 70,
        top: dets.y - 10,
      });
    });
  
  
    
  
  }
  videocontainer()


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