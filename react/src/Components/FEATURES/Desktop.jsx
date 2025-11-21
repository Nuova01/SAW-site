import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect, use } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import './style.css'

export default function Desktop(){ 
    const containerThe = useRef(null);
    const title = useRef(null);
    const item1 = useRef(null);
    const item2img = useRef(null);
    const item3 = useRef(null);
    const item5 = useRef(null);
    const item7 = useRef(null);
    const ynika = useRef(null);
    const el = useRef(null);
    const nie = useRef(null);
    const ei = useRef(null);
    const gear1 = useRef(null);
    const gear2 = useRef(null); 
    const block = useRef(null); 
    const anim1 = useRef(null)
    const anim2 = useRef(null)
    const anim3 = useRef(null)



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

            const tl = gsap.timeline({ paused:true });


            tl

            .fromTo(anim1.current,{x:'-100vw', scale:0, opacity:0,},{x:0,scale:1,opacity:1})
            .fromTo(item1.current, {opacity:0,x:150, scale:2},{scale:1, y:0,opacity:1,color:'white', textShadow:'2px 2px 3px black',})
                .to(item1.current,{y:0, x:0 },)
            .fromTo(item2img.current,{opacity:0,},{opacity:1, } )
            .fromTo(item3.current,{opacity:0, x:150},{x:0,opacity:1,color:'white',zIndex:100, textShadow:'2px 2px 3px black',})



            .fromTo(anim2.current,{x:'100vw',scale:0, opacity:0,},{x:0,scale:1,opacity:1})
            .fromTo(ynika.current,{opacity:0,y:50,xPercent:0},{opacity:1,color:'#222',},)
            .fromTo(el.current,{opacity:0,y:0,},{opacity:1,color:'#222', },'<')
            .fromTo(nie.current,{opacity:0,y:-40,xPercent:0},{opacity:1,color:'#222', },'<')
            .fromTo(el.current,{color:'#222',},{color:'red', })

                .to(el.current,{rotationZ:'0deg',})
            .fromTo(item5.current,{x:-100, y:0},{opacity:1,x:-16,color:'#222', })


                .to(nie.current,{borderTop:'1px solid red', })
                .to(ynika.current,{borderBottom:'1px solid red', })
                .to(item5.current,{textShadow:'2px 2px 4px red', },'<')
                .to(ynika.current,{textShadow:'2px 2px 4px white', },'<')
                .to(nie.current,{textShadow:'2px 2px 4px white', },'<')
                // .to(ynika.current,{opacity:0, })
                // .to(nie.current,{opacity:0, },'<')
                // .to(anim2.current,{ x:400, y:-140})
                // .to(anim2.current,{border: '2px solid red'},'<')



                // .to(item5.current,{opacity:0, })
                // .to(el.current,{rotationZ:'270deg',opacity:0,})

            .fromTo(ei.current,{opacity:0,y:0,x:0},{opacity:1,rotationZ:'180deg',color:'red', })
                .to(ei.current,{y:0,x:0,})

            .fromTo(anim3.current,{x:'-100vw', scale:0, opacity:0,},{x:0,scale:1,opacity:1})

            .fromTo(item7.current,{yPercent:0,opacity:0, color:'white',scale:5},{scale:1,yPercent:0,xPercent:0,opacity:1,textShadow:'2px 2px 4px white',},)
                .to([gear1.current,gear2.current], {opacity:1, },'<')
                .to(item7.current,{textShadow:'5px 5px 5px red', },)
                .to(ei.current,{opacity:0,})


        ScrollTrigger.create({
          trigger: containerThe.current,
          start: "center center",
          once: true,
          onEnter: () => {
            tl.play();
        },
    });
    }, containerThe); 

return () => ctx.revert(); 
}, []);

    return(
        <>
            <div ref={containerThe} className='containerThe'>

                <div className="contSlide1">
                    <div ref={title} className='theTitle'><h1>ВАС ЖДЕТ</h1></div>
                    <div className="boxAnim">
                        <div ref={anim1} className="anim1">
                            <div ref={item1} className='theItem1'><h3>БОЛЕЕ</h3></div>
                            <div ref={item2img} className='theItem2Img'></div>
                            <div ref={item3} className='theItem3'><h3>ЛОКАЦИЙ</h3></div>
                        </div>

                        <div ref={anim2} className="anim2">

                            <div className="ynikMeh">
                                <div ref={ynika} className='ynika'><h3>УНИКА</h3></div>
                                <div ref={el} className='l'><h4>Л</h4></div>
                                <div ref={nie} className='nie'><h3>ЬНЫЕ</h3></div>
                                <div ref={item5} className='theItem5'><h3>ГОЛОВО  ОМКИ</h3></div>
                            </div>
                        </div>
                    </div>

                    <div ref={ei} className='theItem6'><h3>И</h3></div>

                    <div ref={anim3} className="anim3">
                        <div ref={item7} className='theItem7'>
                            <div ref={gear2} className="gear gear2"></div> 
                            <div className='itemMehText'><h3>МЕХАНИЗМЫ</h3></div>
                            <div ref={gear1} className="gear gear1"></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );   
}
