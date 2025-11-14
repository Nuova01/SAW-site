import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import gsap from 'gsap';
import './logo.css'


export default function Logo(){
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const contQuestRef = useRef(null);
  const boxGroup1Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const contBox4pRef = useRef(null);
  const box4p1Ref = useRef(null);
  const box4p2Ref = useRef(null);
  const box4h1Ref = useRef(null);
  const box5Ref = useRef(null);
  const boxGroup2Ref = useRef(null);


  useEffect(() => {

    gsap.fromTo(logoRef.current,{opacity: 0},{opacity: 1, duration: 1, });


    let logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: () => window.innerHeight * 1.2,
        scrub: 0.6
      },
    });

    logoTl.fromTo(logoRef.current,{top: '50vh',scale: 5,textShadow: '0 0 2px rgba(255, 0, 0, 0.3)'},
    {top: 0,scale: 0.7,x:-660,marginLeft: 0,textShadow: '0 0 2px rgba(255, 0, 0, 0)',duration: 0.8,ease: "power1.inOut",});


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "600 center",
        end: "8000 center",
        scrub: true,
        // markers: true,
        pin: true
      }
    });


    tl
    .fromTo(contQuestRef.current,{ width: '300%', height: '100vh',x: -900, y:150, opacity:0, gap: '10vw' },{ width: '100%', height: 'max-content', x: 0,opacity:1,gap: 0 })
      .to(contQuestRef.current,{ width: '100%', height: 'max-content',opacity:1, scale:1.1,})
    .fromTo(box4Ref.current,{ width: '20%', height: '52vh',  },{ width: '50%', height: '50vh', scale:1.01,y: -80  })
      .to(box4Ref.current,{ width: '100%', height: '70vh',  scale:1.1, zIndex:100, },)
      .to(box4p1Ref.current,{opacity:1, scale:1.1, color:'white'})
      .to(box4p2Ref.current,{opacity:1, scale:1.1, color:'white'})
    .fromTo(box4h1Ref.current,{opacity:0, scale:2, color:'white',textShadow: '0px 0px 0px black'},{opacity:1,y:100, scale:3, textShadow: '3px 3px 3px black'})
      .to(boxGroup1Ref.current,{opacity:0, scale:1.1, })
      .to(boxGroup2Ref.current,{opacity:0, scale:1.1, })
      .to(box3Ref.current,{opacity:0, scale:1.1, })
      .to(box5Ref.current,{opacity:0, scale:1.1, })
      .to(contBox4pRef.current,{opacity:0, scale:1, color:'black',})
      .to(box4h1Ref.current,{opacity:0, scale:4, color:'blacl', textShadow: '6px 6px 1px black'})
      .to(box4Ref.current,{y:400,scale:1.3,opacity:0,})
      .to(box4Ref.current,{y:600,});


  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    logoTl.kill();
  };
}, []);


  return (
    <>
      <div className="o-wrapper">
        <header className="header">
          <h1 ref={logoRef} className="logo"></h1>
        </header>

        <div ref={containerRef} className="container">
          <div ref={contQuestRef} className="cont-quest">
            
              <div ref={boxGroup1Ref} className="box-group-1">
                  <div className="box1"></div>
                  <div className="box2"></div>
              </div>

              <div ref={box3Ref} className="box3"></div>

              <div ref={box4Ref} className="box4">

                <div ref={contBox4pRef} className='contBox4p'>
                  <p ref={box4p1Ref} className='box4p1'>КВЕСТ</p>
                  <p ref={box4p2Ref} className='box4p2'>ПЕРФОМАНС</p>
                </div>

                <h1 ref={box4h1Ref} className='box4h1'>ПИЛА</h1>
              </div>

              <div ref={box5Ref} className="box5"></div>

              <div ref={boxGroup2Ref} className="box-group-2">
                  <div className="box6"></div>
                  <div className="box7"></div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
}