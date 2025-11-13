import React from 'react';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./end.css";

gsap.registerPlugin(ScrollTrigger);

export default function End() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const questSlides2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "4000 center",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      questSlides2
        .fromTo(
          boxRef.current,
          { opacity: 0, width: "100px", height: "100px" },
          { opacity: 1, width: "100%", duration: 2 }
        )
        .to(boxRef.current, { height: "100%", duration: 2 })
        .to(boxRef.current, { scale: 0.9, duration: 2 })
        .to(boxRef.current, { scale: 1, duration: 2 })
        .fromTo(
          boxRef.current,
          { height: "100%" },
          { width: "100px", scale: 0.9, duration: 2 }
        )
        .to(boxRef.current, { height: "100px", opacity: 0, duration: 2 });
    }, containerRef);

    return () => ctx.revert(); // очищаем анимации при размонтировании
  }, []);

  return (
    <div className="container4" ref={containerRef}>
      <div className="contBox4 contBox14" ref={boxRef}></div>
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
