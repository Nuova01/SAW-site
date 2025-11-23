import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import "./EndStyle.css";


export default function Mobile() {
  const containerRef = useRef(null);
  const containerBackImg = useRef(null);
  const boxRef = useRef(null);
  const contMap = useRef(null);
  const contNum = useRef(null);
  const contTitle = useRef(null);
  const contAdre = useRef(null);
  const contEml = useRef(null);
  const opa = useRef(null);
  const slideShow = useRef(null);
  const boxBottom = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const questSlides2 = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000 center",
            scrub: true,
            pin: true,
            // markers: true,
        },
        });

    questSlides2
    .fromTo(boxRef.current,{ opacity: 0, width: "10vw", height: "10vh", },{ opacity: 1, width: "90vw", duration: 2 })
        .to(boxRef.current, { height: "90vh", duration: 2 })
        .to(boxRef.current, { scale: 0.9, duration: 2 })
        // .to(contMap.current,{height:0, width:0, duration: 5 })
        .to(contMap.current,{position:'relative', height:'50%', duration: 2,})

    .fromTo(opa.current,{opacity:0,height:0, color:'white'},{opacity:1,height:'50%',duration: 2,color:'grey', },)

        .to(boxRef.current, { scale: 1, duration: 2 })
        .to(contMap.current,{duration:5},'<')


        .to({},{duration:3})

    .fromTo(boxRef.current,{ },{ height: "10vh" ,  duration: 2 })
        .to(opa.current,{opacity:0,duration:2},'<')
        .to(contMap.current,{opacity:0,duration:2},'<')
        .to([contMap.current,opa.current],{display:'none'})

        .to(boxRef.current, { width: "60vw",duration: 2, position:'absolute',})
        .to(boxBottom.current, { duration: 2, display:'flex', opacity:1})

        
        .to(containerBackImg.current,{className:'containerBack', opacity:1,},'<')
        .to(slideShow.current,{opacity:1, duration:3},)
        .fromTo(boxRef.current,{ },{ height: "10vh" ,  duration: 2 });


    }, containerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    
    <div className="container4" ref={containerRef}>
      <div ref={containerBackImg} className="containerBackImg">

        <div ref={slideShow} className="slideshow">
          <div className="slide s1"></div>
          <div className="slide s2"></div>
          <div className="slide s3"></div>
          <div className="slide s4"></div>
          <div className="slide s5"></div>
        </div>
      </div>
      
      <div className="contBox4 contBox14" ref={boxRef}>
        <div ref={contMap} className="contMap"></div>


            <a
              href="https://api-mir-kvestov.ru/api/v3/quests/1350?city_id=1"
              target="_blank"
              rel="noopener noreferrer"
              ref={boxBottom}
              className="boxBottom"
            >
              Забронировать
            </a>


              <div ref={opa} className="opa">
                <div ref={contTitle} className='contTitle'><h3>Контакты</h3></div>
                <div ref={contNum} className='contNum'><h3>+7 (499) 444-21-74</h3></div>
                <div ref={contEml} className='contEml'><h3>kvest.zdes@gmail.com</h3></div>
                <div ref={contAdre} className='contAdre'><h3>г. Москва, Андроновское шоссе, 26с1</h3></div>
              </div>
      </div>

    </div>
  );
}
