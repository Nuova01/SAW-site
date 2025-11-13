import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import React from 'react';
import './the.css'

export default function The(){ 
    const containerThe = useRef(null);
    const title = useRef(null);
    const item1 = useRef(null);
    const item2img = useRef(null);
    const item3 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const item7 = useRef(null);


    const ynika = useRef(null);
    const el = useRef(null);
    const nie = useRef(null);


    useEffect(() => { 
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerThe.current,
                start: "top top",
                end: "5000 top",
                scrub: true,
                pin: true,
                markers: true
            }
        });

        
        tl
        .fromTo(title.current,{opacity:0,scale:1,  x:400,}, {opacity:1,scale:1.1,color:'grey'})
        .fromTo(item1.current, {x:100,scale:0.6,opacity:0,},{opacity:1,x:-350, y:-20, scale:5,opacity:1,color:'white', zIndex:100, textShadow:'2px 2px 3px grey'})
        .fromTo(item2img.current,{x:100,y:-100,scale:0.6,opacity:0,},{opacity:1,x:-150,y:-50, scale:1.8,opacity:1,} )
        .fromTo(item3.current,{opacity:0,x:-100,y:-200,scale:10},{opacity:1,scale:6,y:-150, x:200, color:'white',zIndex:100, textShadow:'2px 2px 3px grey'})


            .to(item1.current,{opacity:0})
            .to(item2img.current,{opacity:0})
            .to(item3.current,{opacity:0})
            

        .fromTo(ynika.current,{opacity:0,scale:3,x:-200,y:-230,rotationZ:'0deg'},{rotationZ:'-90deg',opacity:1,color:'#222'})
        .fromTo(el.current,{opacity:0,scale:3,x:-200,y:-530},{opacity:1,color:'red'})
        .fromTo(nie.current,{rotationZ:'0deg',opacity:0,scale:3,x:-200,y:-815},{rotationZ:'-90deg',opacity:1,color:'#222'})


            .to(el.current,{rotationZ:'2deg',})


        .fromTo(item5.current,{opacity:0,scale:3,x:-254,y:-737},{opacity:1,color:'#222'})


            .to(ynika.current,{borderBottom:'2px solid red'})
            .to(nie.current,{borderTop:'2px solid red'})
            .to(item5.current,{textShadow:'2px 2px 4px red'})


        return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        tl.kill();
        };
    }, []);

return(
    <>
        <div ref={containerThe} className='containerThe'>
            <div ref={title} className='theTitle'><h1>ВАС ЖДЕТ</h1></div>
            <div ref={item1} className='theItem1'><h3>БОЛЕЕ</h3></div>
            <div ref={item2img} className='theItem2Img'></div>
            <div ref={item3} className='theItem3'><h3>ЛОКАЦИЙ</h3></div>

            <div ref={ynika} className='l'><h3>УНИКА</h3></div>
            <div ref={el} className='l'><h3>Л</h3></div>
            <div ref={nie} className='l'><h3>ЬНЫЕ</h3></div>
            <div ref={item5} className='theItem5'><h3>ГОЛОВО ОМКИ</h3></div>
            <div ref={item6} className='theItem6'><h3>И</h3></div>
            <div ref={item7} className='theItem7'><h3>МЕХАНИЗМЫ</h3></div>


        </div>
    </>
);   
}