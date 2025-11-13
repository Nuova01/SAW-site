import React from 'react';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./desc.css";

gsap.registerPlugin(ScrollTrigger);

export default function Desc() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contSlide = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "4000 top",
          scrub: true,
          pin: true,
          markers: true
        }
      });

      contSlide.fromTo(boxRef.current,
          { x: -800, opacity: 0, scale: 1 },
          { x: 0, opacity: 1, duration: 10 }
        )
        .to(boxRef.current, { scale: 0.8, duration: 10 })
        .to('.slide1',{opacity:1, x:-90,y:-80, duration: 10})
        .to('.slide2',{opacity:1, x:700,y:400, duration: 10})
        .to('.slide3',{opacity:1, x:-30,y:150, duration: 10})
        .to('.slide4',{opacity:1, x:800,y:-700, duration: 10})
        .to('.slide5',{opacity:1, x:900,y:-700, duration: 10})
        .to('.slide6',{opacity:1, x:150,y:-1150, duration: 10})

        .to('.slideStyle',{opacity:0, scale:0.5, duration: 10})

        .to(boxRef.current, { scale: 1, duration: 10 })
        .to(boxRef.current, { x: -800, opacity: 0, duration: 10 });
    }, containerRef);

    return () => ctx.revert(); // очищаем анимации при размонтировании
  }, []);

  return (
    <div className="containerDesc" ref={containerRef}>
      <div className="contBox2" ref={boxRef}>
        
            <div className='slideStyle slide1'>
                <h2>В городе творится хаос, на улицах появился новый маньяк конструктор, Пила</h2>
            </div>

            <div className='slideStyle slide2'>
                <h2>Люди в страхе</h2>
            </div>

            <div className='slideStyle slide3'>
                <h2>Полиция всеми силами пытается расследовать серию запутанных убийств</h2>
          </div>

            <div className='slideStyle slide4'>
                <h2>Капитан Бренда возглавила операцию по расследованию, но неожиданно пропадает детектив Тео ее напарник</h2>
            </div>

            <div className='slideStyle slide5'>
                <h2>Она пытается найти своего коллегу, но ее отстраняют от этого дела</h2>
            </div>

            <div className='slideStyle slide6'>
                <h2>В этот же день она получает загадочную посылку с адресом заброшенного бизнес центра</h2>
            </div>

      </div>
    </div>
  );
}



// export default function Desc2(){
//     return(
//         <>
//             <div className='container'>

//                 <div className='desc-back-container'>
//                     <div className="desc-back">
//                         <div className='description'>
//                             <h1>Описание</h1>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='desc-container-grid'>

//                     <div className='desc-left'>
//                         <div className='slide-left'>
//                             <h2>В городе творится хаос, на улицах появился новый маньяк конструктор, Пила</h2>
//                         </div>
//                     </div>

//                     <div className='desc-right'>
//                         <div className='slide-right'>
//                             <h2>Люди в страхе</h2>
//                         </div>
//                     </div>

//                     <div className='desc-left'>
//                         <div className='slide-left'>
//                             <h2>Полиция всеми силами пытается расследовать серию запутанных убийств</h2>
//                         </div>
//                     </div>

//                     <div className='desc-right'>
//                         <div className='slide-right'>
//                             <h2>Капитан Бренда возглавила операцию по расследованию, но неожиданно пропадает детектив Тео ее напарник</h2>
//                         </div>
//                     </div>

//                     <div className='desc-left'>
//                         <div className='slide-left'>
//                             <h2>Она пытается найти своего коллегу, но ее отстраняют от этого дела</h2>
//                         </div>
//                     </div>

//                     <div className='desc-right'>
//                         <div className='slide-right'>
//                             <h2>В этот же день она получает загадочную посылку с адресом заброшенного бизнес центра</h2>
//                         </div>
//                     </div>

//                 </div> 

//             </div>
//         </>
//     )
// }