const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnm(){

    var tl = gsap.timeline();
    tl.from("#nav",{   //here nav is animated via greensock animation platform
        y:`-10`,
     opacity:0,
     duration:1.5,
     ease:Expo.easeInOut

    })

    .to(".boundingelem",{
       y:0,
       ease:Expo.easeInOut,
       duration:2,
       delay:-1,
       stagger:.2   //it helps to delay between our elements  when its shown on screen

    })

    .from("#targetfooter",{

        y:-10,
        opacity:0,
        duration :1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}



function circleMouseFollower() {
    window.addEventListener("mousemove",function (dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)` //backticks are used for direct  values better approach though there are many ways
    

    })
    
}
circleMouseFollower();

firstpageAnm();

//select three elements then mousemove apply and find x and y position rather than x y position show that image and move that image.
//while moving rotate it.
//and when mouse goes fast rotation sholud also go fast.

document.querySelectorAll(".elem").forEach(function (yo){
    var rotate=0;
    var diff2=0;

    yo.addEventListener("mouseleave",function (dets){
        gsap.to(yo.querySelector("img"),{
    
            opacity:0,
            ease:Power2,
        });
    
     });

yo.addEventListener("mousemove",function (dets){

    var diff = dets.clientY - yo.getBoundingClientRect().top;
      diff2=dets.clientX-rotate;
      rotate = dets.clientX;
    
    gsap.to(yo.querySelector("img"),{

        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diff2*.5)
    });

 });

});