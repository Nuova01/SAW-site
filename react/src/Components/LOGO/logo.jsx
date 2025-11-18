import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import './logo.css'
import LogoSvg from "../../../public/logo.svg";

export default function Logo(){
  const logoRef = useRef(null);
  const but = useRef(null)
  const contLogo = useRef(null)
  const containerRef = useRef(null);
  const contQuestRef = useRef(null);
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null)
  const box7Ref = useRef(null)
  const contBox4pRef = useRef(null);
  const boxGroup1Ref = useRef(null);
  const boxGroup2Ref = useRef(null);
  const box4p1Ref = useRef(null);
  const box4p2Ref = useRef(null);
  const box4h1Ref = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
        ////////////////////////
        //////////PC////////////
        ////////////////////////
    mm.add("(min-width: 1024px)", () => {
        const ctx = gsap.context(() => {

          const logoTl = gsap.timeline({
            scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: () => window.innerHeight * 1.2,
            scrub: 0.6,

            }
          });

          const tl = gsap.timeline({
            scrollTrigger: {
            trigger: containerRef.current,
            start: "600 center",
            end: "+=3000 center",
            scrub: true,
            // markers: true,
            pin: true
            }
          });

          const loopAnim = gsap.timeline({
            repeat: -1,
            ease: "power1.inOut",
            paused: true
          }
          );

          gsap
          .fromTo(contLogo.current,{opacity: 0, },{opacity: 1, duration: 1, });
         
          logoTl
          .fromTo(contLogo.current,{y: '45vh', x:'45vw',scale: 4,},
            {y: 0,scale: 0.6,x: 0,textShadow: '0 0 2px rgba(255, 0, 0, 0)',duration: 0.8,ease: "power1.inOut",});

          logoTl.eventCallback("onComplete", () => {
            loopAnim.play();
          });

          loopAnim
          .fromTo(logoRef.current,{opacity:1,scale:1.2},{duration:1.5,scale:1})
            .to(logoRef.current,{duration:1.5,scale:1.2,})
            .to(logoRef.current,{duration:1.5,scale:1,})
            .to(logoRef.current,{duration:1.5,scale:1.2,})
            .to(logoRef.current,{duration:1.5,scale:0,opacity:0,})

          .fromTo(but.current,{opacity:0, scale:0.5},{duration:1.5,opacity:1, scale:1.2})
            .to(but.current,{duration:1.5,scale:1, })
            .to(but.current,{duration:1.5,scale:1.2, })
          .fromTo(but.current,{duration:1.5,scale:1.2},{duration:1.5,opacity:0, scale:0,})
          .fromTo(logoRef.current,{scale:0, opacity:0},{duration:1.5,scale:1.2,opacity:1,immediateRender: false})


          tl
          .fromTo(contQuestRef.current,{ width: '300%', height: '100vh',x: -900, y:150, opacity:0, gap: '10vw' },{ width: '100%', height: 'max-content', x: 0,opacity:1,gap: 0 })
            .to(contQuestRef.current,{ width: '100%', height: 'max-content',opacity:1, scale:1.1,})
          .fromTo(box4Ref.current,{ width: '20%', height: '52vh',  },{ width: '50%', height: '50vh', scale:1.01,y: -80  })
            .to(box4Ref.current,{ width: '100%', height: '70vh',  scale:1.1, zIndex:100, },)
            .to(box4p1Ref.current,{opacity:1, scale:1.1, color:'white'})
            .to(box4p2Ref.current,{opacity:1, scale:1.1, color:'white'})
          .fromTo(box4h1Ref.current,{opacity:0, scale:2, color:'white',textShadow: '0px 0px 0px black'},{opacity:1,y:'30vh', scale:3, textShadow: '3px 3px 3px black'})
            .to(boxGroup1Ref.current,{opacity:0, scale:1.1, })
            .to(boxGroup2Ref.current,{opacity:0, scale:1.1, })
            .to(box3Ref.current,{opacity:0, scale:1.1, })
            .to(box5Ref.current,{opacity:0, scale:1.1, })
            .to(contBox4pRef.current,{opacity:0, scale:1, color:'black',})
            .to(box4h1Ref.current,{opacity:0, scale:4, color:'black', textShadow: '6px 6px 1px black'})
            .to(box4Ref.current,{y:400,scale:1.3,opacity:0,})
            .to(box4Ref.current,{y:600,});

        });

      return () => ctx.revert();
    });
            ///////////////////////////
            ////////MOBILE/////////////
            ///////////////////////////
    mm.add("(max-width: 767px)", () => {
        const ctx = gsap.context(() => {

          const logoTl = gsap.timeline({
            scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: () => window.innerHeight * 1.2,
            scrub: 0.6
            }
          });

          const tl = gsap.timeline({
            scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000 center",
            scrub: true,
            // markers: true,
            pin: true
            }
          });
          
          const loopAnim = gsap.timeline({
            repeat: -1,
            ease: "power1.inOut",
            paused: true
          }
          );


          gsap
          .fromTo(contLogo.current,{opacity: 0, },{opacity: 1, duration: 1, });
         
          logoTl
          .fromTo(contLogo.current,{y: '45vh', x:'35vw',scale: 2,},
            {y: 0,scale: 0.6,x: 0,textShadow: '0 0 2px rgba(255, 0, 0, 0)',duration: 0.8,ease: "power1.inOut",});

          logoTl.eventCallback("onComplete", () => {
            loopAnim.play();
          });

          loopAnim
          .fromTo(logoRef.current,{opacity:1,scale:1.2},{duration:1.5,scale:1})
            .to(logoRef.current,{duration:1.5,scale:1.2,})
            .to(logoRef.current,{duration:1.5,scale:1,})
            .to(logoRef.current,{duration:1.5,scale:1.2,})
            .to(logoRef.current,{duration:1.5,scale:0,opacity:0,})

          .fromTo(but.current,{opacity:0, scale:0.5},{duration:1.5,opacity:1, scale:1.2})
            .to(but.current,{duration:1.5,scale:1, })
            .to(but.current,{duration:1.5,scale:1.2, })
          .fromTo(but.current,{duration:1.5,scale:1.2},{duration:1.5,opacity:0, scale:0,})
          .fromTo(logoRef.current,{scale:0, opacity:0},{duration:1.5,scale:1.2,opacity:1,immediateRender: false})


          tl
          .fromTo(box7Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box6Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box5Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box4Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box3Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box2Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(box1Ref.current,{opacity:0,scale:0.7},{opacity:1, scale:1})
          .fromTo(containerRef.current,{},{duration:3})

            .to(box7Ref.current,{opacity:0,scale:0.7, duration:1,})
            .to(box1Ref.current,{opacity:0,scale:0.7, duration:1,},'<')
            .to(box6Ref.current,{opacity:0,scale:0.7, duration:1,})
            .to(box2Ref.current,{opacity:0,scale:0.7, duration:1,},'<')
            .to(box5Ref.current,{opacity:0,scale:0.7, duration:1,})
            .to(box3Ref.current,{opacity:0,scale:0.7, duration:1,},'<')
            .to([box7Ref.current,box1Ref.current,box6Ref.current,box2Ref.current,box5Ref.current,box3Ref.current],{height:'0vh',duration:2,})

          .fromTo(box4Ref.current,{},{height:'100%', borderRadius:'50px',duration:2},'<')
          
          .fromTo(box4p1Ref.current,{opacity:0, y:'-300%'},{opacity:1, y:0,})
          .fromTo(box4p2Ref.current,{opacity:0, y:'300%'},{opacity:1, y:0,})
          .fromTo(box4h1Ref.current,{opacity:0, scale:0.7, color:'#00000099'},{opacity:1, scale:2, textShadow:'3px 3px 6px red'})

          .fromTo(containerRef.current,{},{duration:1})
                
        });

      return () => ctx.revert();
    });

    return () => mm.revert(); // очищает группы медиазапросов
  }, []);
  return (
    <>
      <div className="o-wrapper">
        <header className="header">
            <div ref={contLogo} className="contLogo">
              <div className='boxLogo'>
              <img src={LogoSvg} ref={logoRef}className="logo"/>
            </div>
            <a
              href="https://api-mir-kvestov.ru/api/v3/quests/1350?city_id=1"
              target="_blank"
              rel="noopener noreferrer"
              ref={but}
              className="but"
            >
              Забронировать
            </a>
          </div>
        </header>

        <div ref={containerRef} className="container">
          <div ref={contQuestRef} className="cont-quest">
              <div ref={boxGroup1Ref} className="box-group-1">
                <div ref={box1Ref} className="box1 box"></div>
                <div ref={box2Ref} className="box2 box"></div>
              </div>

              <div ref={box3Ref} className="box3 box"></div>

              <div ref={box4Ref} className="box4 box">
                <div ref={contBox4pRef} className='contBox4p'>
                  <p ref={box4p1Ref} className='box4p1'>КВЕСТ</p>
                  <p ref={box4p2Ref} className='box4p2'>ПЕРФОМАНС</p>
                </div>

                <h1 ref={box4h1Ref} className='box4h1'>ПИЛА</h1>
              </div>

              <div ref={box5Ref} className="box5 box"></div>

              <div ref={boxGroup2Ref} className="box-group-2">
                <div ref={box6Ref} className="box6 box"></div>
                <div ref={box7Ref} className="box7 box"></div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}