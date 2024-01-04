


function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoscroll();


function cursoreffect(){
    let page1content = document.querySelector(".page1content")
let cursor = document.querySelector(".cursor")

page1content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x : dets.x,
        y : dets.y
    })
})
page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        
        opacity:1
    })
})
page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        
        opacity:0
    })
})
}
cursoreffect();

function firstpage2(){
    gsap.from(".first h2",{
        opacity:0,
        x: -70,
        duration: 0.6,
        delay:1,
        scrollTrigger: {
            trigger: ".first",
            scroller: "#main",
            start: "top 100%",
            end: "top 47%",
            // markers: true,
            scrub: 2
        }
     })
     gsap.from(".first h3",{
        opacity:0,
        x: 70,
        duration: 0.6,
        delay:1,
        scrollTrigger: {
            trigger: ".first",
            scroller: "#main",
            start: "top 100%",
            end: "top 47%",
            // markers: true,
            scrub: 2
        }
     })

}
firstpage2();

function secondpage2(){
    document.querySelector(".second")
    gsap.from(".second h2",{
                y: 100,
                opacity:0,
                stagger:0.1,
                duration: 0.5,
                delay:1,
                scrollTrigger: {
                    trigger: ".second",
                    scroller: "#main",
                    start: "top 100%",
                    end: "top 45%",
                    // markers: true,
                    scrub: 2
                }
                
                

    })
}
secondpage2();

function ruj(){
    gsap.from("h1",{
        opacity:0,
        duration:3,
    })
}
ruj();

function fourpagetexth3(){
    document.querySelector("page4")
    gsap.from(".page4 h3",{
                x: -100,
                opacity:0,
                stagger:0.1,
                duration: 0.5,
                delay:1,
                scrollTrigger: {
                    trigger: ".page4",
                    scroller: "#main",
                    start: "top 70%",
                    end: "top 75%",
                    // markers: true,
                    scrub: 1.5
                }
                
                

    })
}
fourpagetexth3();

function fourpagetext(){
    document.querySelector(".page4")
    gsap.from(".page4 h2",{
                y: 120,
                opacity:-1,
                stagger:0.3,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ".page4",
                    scroller: "#main",
                    start: "top 70%",
                    end: "top 80%",
                    // markers: true,
                    scrub: 5
                }
                
                

    })
}
fourpagetext();

function boxanimation(){
    gsap.from(".box",{
        y:100,
        opacity:0,
        stagger:0.2,
        duration:0.7,
        scrollTrigger: {
            trigger: ".page3bottom",
            scroller:"#main",
            start: "top 64%",
            end: "top 80%",
            // markers: true,
             scrub: 2

        }
    })

}
boxanimation();

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 900,
            disableOnInteraction: true,
            
          },
      });
};
swiper();

function loader(){
    let tl = gsap.timeline()

tl.from(".loader h3",{
    x:90,
    opacity:0,
    stagger:0.1,
    duration:0.8
} );
tl.to(".loader h3",{
    // x: -50,
    delay:0.3,
    opacity:0,
    stagger:0.1,
    duration:0.5
})
tl.to(".loader ",{
    opacity:0,
    duration:1,
    delay:0.4,
    display: "none"
})

    tl.from(".nav h3",{
        x: 100,
        opacity:0,
        duration:0.6
    
    })
    tl.from(".nav h4",{
        scale:0,
        opacity:0,
        duration:0.4
    
    })
}
loader();

function footer(){

    let tx = gsap.timeline()

    tx.from(".page8 ",{
        y:100,
        opacity:0,
        duration:0.1,
        scrollTrigger: {
            trigger: ".page8",
            scroller: "#main",
            start: "top 75%",
            end: "top 75%",
            // markers: true,
            scrub: 2
        }
        

    })

    tx.from(".page8 .left h5 ",{
        x:100,

        duration:1.5,
        opacity:0,

        scrollTrigger: {
            trigger: ".page8",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            // markers: true,
            scrub: 1.5
        }

    })

    tx.from(".page8 .right  h5 ",{
        y:100,

        duration:1.5,
        opacity:0,

        scrollTrigger: {
            trigger: ".page8",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            // markers: true,
            scrub: 1.5
        }

    })

    tx.from(".page8 .right2  h5 ",{
        y:100,

        duration:1.5,
        opacity:0,

        scrollTrigger: {
            trigger: ".page8",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            // markers: true,
            scrub: 1.5
        }

    })

    tx.from(".page8 button",{
        duration:1.5,
        opacity:0,
        scrollTrigger: {
            trigger: ".page8",
            scroller: "#main",
            start: "top 70%",
            end: "top 75%",
            // markers: true,
            scrub: 1.5
        }

    })

}
footer()

function rejouice(){
    let tl = gsap.timeline()

tl.from(".tittle h2",{
    y: -120,
    opacity:0,
    stagger:0.1,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".tittle",
        scroller: "#main",
        start: "top 70%",
        end: "top 80%",
        // markers: true,
        scrub: 4
    }
    
})

}
rejouice()











