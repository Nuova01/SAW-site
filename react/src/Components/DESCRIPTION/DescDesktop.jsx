import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import "./DescStyle.css";


export default function Desktop(){
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const slide4Ref = useRef(null);
  const slide5Ref = useRef(null);
  const slide6Ref = useRef(null);

    
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const contSlide = gsap.timeline({ paused: true });

      contSlide
      .fromTo(boxRef.current,{ x: -800, opacity: 0, scale: 1 },{ x: 0, opacity: 1, duration: 1 })
        .to(boxRef.current, { scale: 0.8, duration: 1 })
        
      .fromTo(slide1Ref.current,{opacity:0, scale:0.5,xPercent:160,yPercent:200},{opacity:1, scale:1,xPercent:0,yPercent:0})
      .fromTo(slide2Ref.current,{opacity:0, scale:0.5,xPercent:-160,yPercent:-200 },{opacity:1, scale:1,xPercent:0,yPercent:0 },'<')
      .fromTo(slide3Ref.current,{opacity:0, scale:0.5,xPercent:160,yPercent:200 },{opacity:1, scale:1,xPercent:0,yPercent:0 })
      .fromTo(slide4Ref.current,{opacity:0, scale:0.5,xPercent:-160,yPercent:-200 },{opacity:1, scale:1,xPercent:0,yPercent:0 },'<')
      .fromTo(slide5Ref.current,{opacity:0, scale:0.5,xPercent:160,yPercent:200 },{opacity:1, scale:1,xPercent:0,yPercent:0 })
      .fromTo(slide6Ref.current,{opacity:0, scale:0.5,xPercent:-160,yPercent:-200 },{opacity:1, scale:1,xPercent:0,yPercent:0 },'<')

        .to(boxRef.current,{gap:'7%'})
        .to(slide1Ref.current,{scale:1.09, duration: 1, color:'white'},'<')
        .to(slide2Ref.current,{scale:1.09,duration: 1, color:'white'},'<')
        .to(slide3Ref.current,{scale:1.09, duration: 1, color:'white'},'<')
        .to(slide4Ref.current,{scale:1.09,duration: 1, color:'white'},'<')
        .to(slide5Ref.current,{scale:1.09, duration: 1, color:'white'},'<')
        .to(slide6Ref.current,{scale:1.09, duration: 1, color:'white'},'<')

        .to(boxRef.current,{ scale: 0.9, duration: 1,  boxShadow:'0px 0px 50px aqua' },'<')


        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top center",
          once: true,
          onEnter: () => {
            contSlide.play();
        },
    });

    }, containerRef); 



    return () => ctx.revert(); 
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