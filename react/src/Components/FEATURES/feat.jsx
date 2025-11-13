import React from 'react';
import './feat.css'
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function Feat(){
    const containerRef = useRef(null);
    const fBlur = useRef(null);
    const mini = useRef(null);

    const big1 = useRef(null);
    const f1 = useRef(null);
    
    const big2 = useRef(null);
    const f2 = useRef(null);
    
    const big3 = useRef(null);
    const f3 = useRef(null);

    const big4 = useRef(null);
    const f4 = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: true,
          pin: true,
          markers: true
        }
      });

      tl.to(mini.current,{opacity:1,})
        .to(fBlur.current, {opacity:1,})
        .to(big1.current,{opacity:1,})
        .to(f1.current,{opacity:1,})

        .fromTo(f2.current,{opacity:0,},{opacity:1,})
        

        .to(big2.current,{opacity:1,})
        .fromTo(f3.current,{opacity:0,},{opacity:1,})

        .to(big3.current,{opacity:1,})
        .fromTo(f4.current,{opacity:0,},{opacity:1,})
        .to(big4.current,{opacity:1,})





    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return(
        <>
            <div className="containerFeat" ref={containerRef}>

                <div className="styleBigfeat contBigFeat1" ref={big1}>
                    <div className="blur"ref={fBlur}></div>
                    <div className='featMini'ref={mini}>
                        <div className='f1'ref={f1}/>
                    </div>
                </div>

                <div className="styleBigfeat contBigFeat2" ref={big2}>
                      <div className="blur"></div>
                    <div className='featMini'>
                        <div className='f2'ref={f2}/>
                    </div>
                </div>

                <div className="styleBigfeat contBigFeat3" ref={big3}>
                      <div className="blur"></div>
                    <div className='featMini'>
                        <div className='f3'ref={f3}/>
                    </div>
                </div>

                <div className="styleBigfeat contBigFeat4" ref={big4}>
                      <div className="blur"></div>
                    <div className='featMini'>
                        <div className='f4'ref={f4}/>
                    </div>
                </div>
            </div>


            {/* <div className='container'>

                <div className='features'>
                    <h1>Особенности</h1>
                </div>

                <div className='features-container'>
                    <div className='features-mobile'>
                        <h1>Особенности</h1>
                    </div>
                    <div className='left-info'>
                        <h2 className='left-title-card'>Вас ждет:</h2>
                        <div className='left-card1'>– более 5 локаций;</div>
                        <div className='left-card2'>– уникальные головоломки и механизмы;</div>
                        <div className='left-card3'>– игра актеров;</div>
                        <div className='left-card4'>– иммерсивное шоу-представление в процессе игры;</div>
                        <div className='left-card5'>– до 10 участников( стоимость игры за одного игрока от 4500 - 5500 рублей, за каждого дополнительного игрока от 500 - 1000 рублей) ;</div>
                        <div className='left-card6'>– на сеансы необходима предоплата 2000 рублей;</div>
                        <div className='left-card7'>– сопровождение юных участников квеста аниматором (обязательно для детей до 14 лет) - 1500 рублей.</div>
                        <div className='left-card8'>Возрастные ограничения: 14+</div>
                    </div>

                    <div className='right-info'>
                        <h2 className='right-title-card'>Режим:</h2>
                        <div className='right-card1'>12+: без контакта;</div>
                        <div className='right-card2'>16+: актер может взять за руку, дотронуться до плеча, отвести в другую комнату;</div>
                        <div className='right-card3'>18+: безболезненный сюжетный контакт в рамках сценария, исключающий риск причинения вреда здоровью.</div>
                    </div>
                    

                </div>

            </div> */}
        </>
    )
}