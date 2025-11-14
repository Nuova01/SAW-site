import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import React from 'react';
import "./end.css";


export default function End() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const contMap = useRef(null);
  const contNum = useRef(null);
  const contTitle = useRef(null);
  const contAdre = useRef(null);
  const contEml = useRef(null);
  const opa = useRef(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      const questSlides2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "4000 center",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      questSlides2
        .fromTo(boxRef.current,{ opacity: 0, width: "100px", height: "100px" },
                              { opacity: 1, width: "100%", duration: 2 })
        .to(boxRef.current, { height: "100%", duration: 2 })
        .to(boxRef.current, { scale: 0.9, duration: 2 })
        .fromTo(opa.current,{opacity:0, x:0},{opacity:1, x:-350,y:100},'<')

        .to(boxRef.current, { scale: 1, duration: 2 })
        .fromTo(boxRef.current,{ height: "100%" },{ width: "100px", scale: 0.9, duration: 2 })
        .to(opa.current,{opacity:0,},'<')
        .to(boxRef.current, { height: "100px", opacity: 0, duration: 2 });
    }, containerRef);

    return () => ctx.revert(); // очищаем анимации при размонтировании
  }, []);

  return (
    
    <div className="container4" ref={containerRef}>
      <div className="contBox4 contBox14" ref={boxRef}>

        <div ref={contMap} className="contMap"></div>

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

            {/* <div className='container'>

                <div className='footer-container'>

                    <div className='footer-title'>
                        <h1>Контакты</h1>
                        <h3>+7 (499) 444-21-74</h3>
                        <h3>kvest.zdes@gmail.com</h3>
                        <h3>г. Москва, Андроновское шоссе, 26с1</h3>
                        <a  href="https://api-mir-kvestov.ru/api/v3/quests/1350?city_id=1" target="_blank" rel="noopener noreferrer">
                            <button className='image-button-right-card4'><h2>Забронировать</h2></button>
                        </a>
                    </div>

                    <div className='right-container-map'>
                        <a href="https://yandex.ru/maps/213/moscow/house/andronovskoye_shosse_26s1/Z04YcQRgSkMCQFtvfXtyeX1jYQ==/?ll=37.732556%2C55.736924&utm_source=share&z=14.53"><div className="galleryPicMap"></div></a>
                    </div>
 
                </div>

            </div> */}
