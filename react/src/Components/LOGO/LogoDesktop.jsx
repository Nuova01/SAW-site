import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import React from "react";
import "./LogoStyle.css";
import LogoSvg from "/logo.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Desktop() {
  const containerRef = useRef(null);

  const contLogo = useRef(null);
  const logoRef = useRef(null);
  const but = useRef(null);
  const questsBut = useRef(null);
  const rulesBut = useRef(null);
  const header = useRef(null);


  const contQuestRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);
  const box7Ref = useRef(null);

  const boxGroup1Ref = useRef(null);
  const boxGroup2Ref = useRef(null);

  const contBox4pRef = useRef(null);
  const box4p1Ref = useRef(null);
  const box4p2Ref = useRef(null);
  const box4h1Ref = useRef(null);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const logoTl = gsap.timeline({ paused: true });
      const mainTl = gsap.timeline({ paused: true });


      // const loopTl = gsap.timeline({
      //   repeat: -1,
      //   ease: "power1.inOut",
      //   paused: true,
      // });
      
      // const loopTlPausedLogo = gsap.timeline({ paused: true });
      const loopTlPaused = gsap.timeline({ paused: true });


      const box4 = gsap.timeline({
        repeat: -1,
        ease: "power1.inOut",
        paused: true,
      });


      logoTl
        .fromTo(contLogo.current,{ opacity: 0, y: "40vh", x: "40vw", scale: 4 },{ opacity: 1, })
          .to(contLogo.current, {y: 0,scale: 0.6,x: 0,duration: 0.8,ease: "power1.inOut",})

      // loopTl
      //   .fromTo(logoRef.current,{ opacity: 0, scale: 1.2 },{opacity: 1, duration: 1.5, scale: 1 })
      //     .to(logoRef.current, { duration: 1.5, scale: 1.2 })
      //     .to(logoRef.current, { duration: 1.5, scale: 1 })
      //     .to(logoRef.current, { duration: 1.5, scale: 1.2 })
      //     .to(logoRef.current, { duration: 1.5, scale: 0, opacity: 0 })

      //   .fromTo(but.current,{ opacity: 0, scale: 0.5 },{ duration: 1.5, opacity: 1, scale: 1.2 })
      //     .to(but.current, { duration: 1.5, scale: 1 })
      //     .to(but.current, { duration: 1.5, scale: 1.2 })
      //     .to(but.current, { duration: 1.5, opacity: 0, scale: 0 })

      //   .fromTo(logoRef.current,{ opacity: 0, scale: 0 },{ duration: 1.5, opacity: 1, scale: 1.2 });

      // loopTlPausedLogo


      loopTlPaused
        .fromTo(logoRef.current,{opacity:1, },{opacity:0,})
          .to(header.current,{background:'#00000099', boxShadow:'3px 0px 20px aqua'},)

        .fromTo(but.current,{x:0, display:'none'},{opacity:1, display:'flex', position:'absolute'})
        .fromTo(rulesBut.current,{opacity:0,display:'none'},{opacity:1, display:'flex'},'<')
        .fromTo(questsBut.current,{opacity:0,display:'none'},{opacity:1, display:'flex'},'<')



        
      mainTl
        .fromTo(contQuestRef.current,{width: "300%",height: "100vh",x: -900,opacity: 0,gap: "20vw",},{width: "100%",height: "max-content",x: 0,opacity: 1,gap: 0,})
          .to(contQuestRef.current, {scale: 1.1,})

        .fromTo(box4Ref.current,{ width: "20%", height: "52vh" },{ width: "50%", height: "50vh", scale: 1.01, y: -80 })
          .to(box4Ref.current, {width: "100%",height: "70vh",scale: 1.1,zIndex: 100,})

          .to([boxGroup1Ref.current,boxGroup2Ref.current,box3Ref.current,box5Ref.current,],{ opacity: 0.3, scale: 1.1 },"<")

          .to(box4p1Ref.current, { opacity: 1, scale: 1.1, color: "grey" })
          .to(box4p2Ref.current, { opacity: 1, scale: 1.1, color: "grey" })

        .fromTo(box4h1Ref.current,{opacity: 0,scale: 2,color: "#00000099",textShadow: "0px 0px 10px white",},{opacity: 1,y: "30vh",scale: 3,textShadow: "3px 3px 3px red",})

      box4
        .to({},{duration:2})

        .to(box4Ref.current,{y:-100})
        .to(box4Ref.current,{y:-80})
        .to(box4Ref.current,{y:-100})
        .to(box4Ref.current,{y:-80})

        .to({},{duration:2})

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        once: true,
        onEnter: () => {
          logoTl.play();
          // loopTl.play();
        },
      });

      logoTl.eventCallback("onComplete", () => {
        mainTl.play();

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

// запуск при клике на header
header.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы клик не улетал на document
    loopTlPaused.play();
});

// запуск при клике на logo
logo.addEventListener('click', (e) => {
    e.stopPropagation(); // не даём всплыть до document
    loopTlPaused.play();
});

// ► Клик ВНЕ header
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        loopTlPaused.reverse();
    }
});

      

      });
      mainTl.eventCallback("onComplete", () => {
        box4.play();
      });
    }, containerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <>
      <div className="o-wrapper">
        <header ref={header} className="header">
          <div ref={contLogo} className="contLogo">
            <div className="boxLogo">
              <img src={LogoSvg} ref={logoRef} className="logo" />

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
         </div>



            <a
              href="https://квест-здесь.рф/"
              target="_blank"
              rel="noopener noreferrer"
              ref={questsBut}
              className="quests"
            >
              Наши квесты
            </a>

            <a
              href="https://квест-здесь.рф/rules"
              target="_blank"
              rel="noopener noreferrer"
              ref={rulesBut}
              className="rules"
            >
              Правила
            </a>

        </header>

        <div ref={containerRef} className="container">
          <div ref={contQuestRef} className="cont-quest">
            <div ref={boxGroup1Ref} className="box-group-1">
              <div ref={box1Ref} className="box1 box"></div>
              <div ref={box2Ref} className="box2 box"></div>
            </div>

            <div ref={box3Ref} className="box3 box"></div>

            <div ref={box4Ref} className="box4 box">
              <div ref={contBox4pRef} className="contBox4p">
                <p ref={box4p1Ref} className="box4p1">
                  КВЕСТ
                </p>
                <p ref={box4p2Ref} className="box4p2">
                  ПЕРФОМАНС
                </p>
              </div>

              <h1 ref={box4h1Ref} className="box4h1">
                ПИЛА
              </h1>
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
