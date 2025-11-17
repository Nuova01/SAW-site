import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import "./desc.css";


export default function Desc(){
    const containerRef = useRef(null);
    const boxRef = useRef(null);
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);
    const slide4Ref = useRef(null);
    const slide5Ref = useRef(null);
    const slide6Ref = useRef(null);

    
    useEffect(() => {
    const mm = gsap.matchMedia();
        ////////////////////////
        //////////PC////////////
        ////////////////////////
    mm.add("(min-width: 1024px)", () => {
        const ctx = gsap.context(() => {

            const contSlide = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=5000 top",
                scrub: true,
                pin: true,
                // markers: true
              }
            });

            contSlide
            .fromTo(boxRef.current,{ x: -800, opacity: 0, scale: 1 },{ x: 0, opacity: 1, duration: 10 })
              .to(boxRef.current, { scale: 0.8, duration: 10 })
              
            .fromTo(slide1Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:-9,yPercent:-30, duration: 10})
            .fromTo(slide2Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:130,yPercent:250, duration: 10})
            .fromTo(slide3Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:-3,yPercent:60, duration: 10})
            .fromTo(slide4Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:160,yPercent:-200, duration: 10})
            .fromTo(slide5Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:160,yPercent:-250, duration: 10})
            .fromTo(slide6Ref.current,{opacity:0, scale:0.5, duration: 10},{opacity:1, scale:1, xPercent:30,yPercent:-360, duration: 10})

            .fromTo(containerRef.current,{},{duration:10})
            
              .to(slide1Ref.current,{scale:0.5,opacity:0, duration: 10},)
              .to(slide2Ref.current,{scale:0.5,opacity:0, duration: 10},'<')
              .to(slide3Ref.current,{scale:0.5,opacity:0, duration: 10},'<')
              .to(slide4Ref.current,{scale:0.5,opacity:0, duration: 10},'<')
              .to(slide5Ref.current,{scale:0.5,opacity:0, duration: 10},'<')
              .to(slide6Ref.current,{scale:0.5,opacity:0, duration: 10},'<')

              .to(boxRef.current,{ scale: 1, duration: 10 },'<')
              .to(boxRef.current,{ x: -800, opacity: 0, duration: 10 });

    });

    return () => ctx.revert();
  });

            ///////////////////////////
            ////////MOBILE/////////////
            ///////////////////////////
              mm.add("(max-width: 767px)", () => {
    const ctx = gsap.context(() => {
            const contSlide = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=5000 top",
                scrub: true,
                pin: true,
                // markers: true
              }
            });

            contSlide
            .fromTo(boxRef.current,{ xPercent:-100, opacity: 0, scale: 1 },{ xPercent: 0, opacity: 1, duration: 10 })
              .to(boxRef.current, { scale: 0.8, duration: 10 })

            .fromTo(slide1Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 6})
            .to({},{duration:10})
            .fromTo(slide1Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})


            .fromTo(slide2Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 6})
            .to({},{duration:10})
            .fromTo(slide2Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})

            .fromTo(slide3Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 10})
            .to({},{duration:10})
            .fromTo(slide3Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})

            .fromTo(slide4Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 6})
            .to({},{duration:10})
            .fromTo(slide4Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})

            .fromTo(slide5Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 6})
            .to({},{duration:10})
            .fromTo(slide5Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})

            .fromTo(slide6Ref.current,{opacity:0, scale:0.5, duration: 6},{opacity:1, scale:1, duration: 6})
            .to({},{duration:10})
            .fromTo(slide6Ref.current,{duration: 6},{opacity:0, scale:0.5, duration: 6})

              .to(boxRef.current,{ scale: 1, duration: 10 },'<')
              .to(boxRef.current,{ xPercent: -100, opacity: 0, duration: 10 });

            },
        
    )

    return () => ctx.revert();
  });

  return () => mm.revert(); // очищает группы медиазапросов
}, []);

  return (
    <div className="containerDesc" ref={containerRef}>
      <div className="contBox2" ref={boxRef}>
        
            <div ref={slide1Ref} className='slideStyle slide1'>
                <h2>В городе творится хаос, на улицах появился новый маньяк конструктор, Пила</h2>
            </div>

            <div ref={slide2Ref} className='slideStyle slide2'>
                <h2>Люди в страхе</h2>
            </div>

            <div ref={slide3Ref} className='slideStyle slide3'>
                <h2>Полиция всеми силами пытается расследовать серию запутанных убийств</h2>
            </div>

            <div ref={slide4Ref} className='slideStyle slide4'>
                <h2>Капитан Бренда возглавила операцию по расследованию, но неожиданно пропадает детектив Тео ее напарник</h2>
            </div>

            <div ref={slide5Ref} className='slideStyle slide5'>
                <h2>Она пытается найти своего коллегу, но ее отстраняют от этого дела</h2>
            </div>

            <div ref={slide6Ref} className='slideStyle slide6'>
                <h2>В этот же день она получает загадочную посылку с адресом заброшенного бизнес центра</h2>
            </div>

      </div>
    </div>
  );
}