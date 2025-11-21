import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import './style.css'

export default function Mobile(){ 
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

        const t1 = gsap.timeline({paused:true});
        const t2 = gsap.timeline({paused:true});
        const t3 = gsap.timeline({paused:true});



        t1
                .fromTo(item1.current, {scale:0.6,opacity:0,},{ y:0, scale:1.8,opacity:1, zIndex:100, textShadow:'2px 2px 4px black', })
                    .to(item1.current,{y:-200, })

                .fromTo(item2img.current,{scale:0.6,opacity:0,},{ scale:0.8,opacity:1, textShadow:'5px 5px 6px black', } )
                .fromTo(item3.current,{opacity:0, scale:1,},{opacity:1,scale:1.8,zIndex:100, textShadow:'2px 2px 4px black', })
                    .to(item3.current,{y:200, });
        t2
                .fromTo(ynika.current,{opacity:0,scale:1.3,y:80,x:22},{opacity:1,color:'#222'})
                .fromTo(el.current,{opacity:0,scale:1.3,y:15,x:22},{opacity:1,color:'black', },'<')
                .fromTo(nie.current,{opacity:0,scale:1.3,y:-40,x:22},{opacity:1,color:'#222', },'<')
                .fromTo(el.current,{color:'black',},{color:'red', })
                    .to(el.current,{rotationZ:'0deg', })

                           
                .fromTo(item5.current,{scale:1.3,y:15, x:0, },{opacity:1,x:0,color:'#222', duration:2})


                    .to(item5.current,{textShadow:'2px 2px 4px red', },'<')
                    .to(ynika.current,{textShadow:'2px 2px 4px white', },'<')
                    .to(nie.current,{textShadow:'2px 2px 4px white', },'<');
        t3 
                .fromTo(item7.current,{y:-500,x:-300, opacity:0, scale:1},{y:-100,x:-100,scale:1.5,opacity:1,textShadow:'-2px 2px 4px black', duration:2},)
                    .to([gear1.current,gear2.current], {opacity:1, duration:1},)

        ScrollTrigger.create({
            trigger: anim1.current,
            start: "top 200",
            once: true,
            onEnter: () => {
            t1.play();

            }})
        ScrollTrigger.create({
            trigger: anim2.current,
            start: "top 200",
            once: true,
            onEnter: () => {
            t2.play();

            }})
        ScrollTrigger.create({
            trigger: anim3.current,
            start: "top 200",
            once: true,
            onEnter: () => {
            t3.play();

            }})
        
    }, containerThe); 

    return () => ctx.revert(); 
}, []);
    return(
        <>
            <div ref={containerThe} className='containerThe'>

                <div className="contSlide1">
                    <div ref={title} className='theTitle'><h1>ВАС ЖДЕТ</h1></div>
                        <div ref={anim1} className="anim1">
                            <h3 ref={item1} className='theItem1'>БОЛЕЕ</h3>
                            <div ref={item2img} className='theItem2Img'>5</div>
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


                    <div ref={anim3} className="anim3">
                        <div className="boxGear">
                            <div ref={gear1} className="gear gear1"></div>
                            <div ref={gear2} className="gear gear2"></div> 
                        </div>
                        <div ref={item7} className='theItem7'>
                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>
                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>

                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>
                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>

                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>
                            <div className='itemMehText'><p>МЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫМЕХАНИЗМЫ</p></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );   
}