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
    const item7 = useRef(null);
    const ynika = useRef(null);
    const el = useRef(null);
    const nie = useRef(null);
    const ei = useRef(null);
    const gear1 = useRef(null);
    const gear2 = useRef(null); 
    const block = useRef(null); 


    useEffect(() => { 
        ScrollTrigger.matchMedia({
            ////////////////////////
            //////////PC////////////
            ////////////////////////
            '(min-width:1024px)': function() {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerThe.current,
                        start: "top top",
                        end: "8000 top",
                        scrub: true,
                        pin: true,
                        // markers: true
                    }
                });


                tl
                .fromTo(title.current,{opacity:0,scale:1,yPercent:-200, duration:5}, {yPercent:0,opacity:1,scale:1, duration:10})


                .fromTo(item1.current, {scale:0.6,opacity:0,duration:10,},{ yPercent:100,xPercent:-20, scale:3,opacity:1,color:'white', zIndex:100, textShadow:'2px 2px 3px grey', duration:10})
                .fromTo(item2img.current,{scale:0.6,opacity:0,duration:10,},{ scale:2,opacity:1, duration:10} )
                .fromTo(item3.current,{opacity:0, scale:1,duration:10,},{opacity:1,scale:3, color:'white',zIndex:100, textShadow:'2px 2px 3px grey', duration:10})

                    .to(item1.current,{opacity:0, duration:10})
                    .to(item2img.current,{opacity:0, duration:10})
                    .to(item3.current,{opacity:0, duration:10})

                .fromTo(ynika.current,{opacity:0,scale:2,yPercent:140,xPercent:22},{opacity:1,color:'#222', duration:'5'})
                .fromTo(el.current,{opacity:0,scale:2,yPercent:15,xPercent:100},{opacity:1,color:'#222', duration:5},'<')
                .fromTo(nie.current,{opacity:0,scale:2,yPercent:-100,xPercent:22},{opacity:1,color:'#222', duration:5},'<')
                .fromTo(el.current,{color:'#222',},{color:'red', duration:5})

                    .to(el.current,{rotationZ:'0deg', duration:5})
                .fromTo(item5.current,{scale:2,yPercent:15, xPercent:10, duration:20},{opacity:1,xPercent:-6,color:'#222', duration:20})


                    .to(nie.current,{borderTop:'1px solid red', duration:5})
                    .to(ynika.current,{borderBottom:'1px solid red', duration:5})
                    .to(item5.current,{textShadow:'2px 2px 4px red', duration:5},'<')
                    .to(ynika.current,{textShadow:'2px 2px 4px white', duration:5},'<')
                    .to(nie.current,{textShadow:'2px 2px 4px white', duration:5},'<')
                    .to({},{duration:5})
                    .to(ynika.current,{opacity:0, duration:5})
                    .to(nie.current,{opacity:0, duration:5},'<')
                    .to({},{duration:3})

                    .to(item5.current,{opacity:0, duration:5})
                    .to(el.current,{rotationZ:'270deg',opacity:0, duration:6})
// 
                .fromTo(ei.current,{opacity:0,scale:0,yPercent:15,xPercent:100},{scale:2,opacity:1,rotationZ:'180deg',color:'red', duration:5})
                    .to({},{duration:10})
                    .to(ei.current,{yPercent:-100,xPercent:0,duration:5})
 
                .fromTo(item7.current,{yPercent:100,rotationZ:'-90deg', opacity:0, color:'white', scale:1},{yPercent:200,xPercent:20,scale:2,opacity:1,textShadow:'2px 2px 4px white',duration:6},)
                    .fromTo(item7.current,{rotationZ:'-90deg', scale:2, duration:10},{xPercent:0,rotationZ:'0deg', scale:5, duration:10})
                    .to([gear1.current,gear2.current], {opacity:1, duration:10},'<')
                    .to(item7.current,{textShadow:'5px 5px 5px red', duration:10},)
                    .to({},{duration:5})
            },

            ///////////////////////////
            ////////MOBILE/////////////
            ///////////////////////////
            '(max-width:767px)': function() {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerThe.current,
                    start: "top top",
                    end: "6000 top",
                    scrub: true,
                    pin: true,
                    // markers: true
                }
            });
            gsap.set([containerThe.current, 
                title.current, 
                item1.current, 
                item2img.current, 
                item3.current, 
                item5.current, 
                item7.current, 
                ynika.current, 
                el.current, 
                nie.current, 
                ei.current, 
                gear1.current, 
                gear2.current, 
                block.current],{
              clearProps:'all'
            });

            tl
                .fromTo(title.current,{opacity:0,scale:1,yPercent:-200, duration:5}, {yPercent:0,opacity:1,scale:1, duration:10})


                .fromTo(item1.current, {scale:0.6,opacity:0,duration:10,},{ yPercent:0, scale:1.8,opacity:1,color:'white', zIndex:100, textShadow:'2px 2px 3px grey', duration:10})
                .fromTo(item2img.current,{scale:0.6,opacity:0,duration:10,},{ scale:0.8,opacity:1, duration:10} )
                .fromTo(item3.current,{opacity:0, scale:1,duration:10,},{opacity:1,scale:1.8, color:'white',zIndex:100, textShadow:'2px 2px 3px grey', duration:10})

                    .to(item1.current,{opacity:0, duration:10})
                    .to(item2img.current,{opacity:0, duration:10})
                    .to(item3.current,{opacity:0, duration:10})

                .fromTo(ynika.current,{opacity:0,scale:1.3,yPercent:100,xPercent:22},{opacity:1,color:'#222', duration:'5'})
                .fromTo(el.current,{opacity:0,scale:1.3,yPercent:15,xPercent:100},{opacity:1,color:'black', duration:5},'<')
                .fromTo(nie.current,{opacity:0,scale:1.3,yPercent:-60,xPercent:22},{opacity:1,color:'#222', duration:5},'<')
                .fromTo(el.current,{color:'black',},{color:'red', duration:5})

                    .to(el.current,{rotationZ:'0deg', duration:5})
                .fromTo(item5.current,{scale:1.3,yPercent:15, xPercent:0, duration:20},{opacity:1,xPercent:0,color:'#222', duration:20})


                    .to(nie.current,{borderTop:'1px solid red', duration:5})
                    .to(ynika.current,{borderBottom:'1px solid red', duration:5})
                    .to(item5.current,{textShadow:'2px 2px 4px red', duration:5},'<')
                    .to(ynika.current,{textShadow:'2px 2px 4px white', duration:5},'<')
                    .to(nie.current,{textShadow:'2px 2px 4px white', duration:5},'<')
                    .to({},{duration:5})
                    .to(ynika.current,{opacity:0, duration:5})
                    .to(nie.current,{opacity:0, duration:5},'<')
                    .to({},{duration:3})

                    .to(item5.current,{opacity:0, duration:5})
                    .to(el.current,{rotationZ:'270deg',opacity:0, duration:6})
// 
                .fromTo(ei.current,{opacity:0,scale:0,yPercent:15,xPercent:100},{scale:1.3,opacity:1,rotationZ:'180deg',color:'red', duration:5})
                    .to({},{duration:10})
                    .to(ei.current,{yPercent:-100,xPercent:0,duration:5})
 
                .fromTo(item7.current,{yPercent:100,rotationZ:'-90deg', opacity:0, color:'white', scale:1},{yPercent:200,scale:1.4,opacity:1,textShadow:'2px 2px 4px white',duration:6},)
                    .fromTo(item7.current,{rotationZ:'-90deg', scale:1.4, duration:10},{rotationZ:'0deg', scale:1, duration:10})
                    .to([gear1.current,gear2.current], {opacity:1, duration:10},'<')
                    .to(item7.current,{textShadow:'5px 5px 5px red', duration:10},)
                    .to({},{duration:5})
                
            },
        }
    )


        return () => {
            ScrollTrigger.clearMatchMedia();
        };
    }, []);


    return(
        <>
            <div ref={containerThe} className='containerThe'>

                <div className="contSlide1">
                    <div ref={title} className='theTitle'><h1>ВАС ЖДЕТ</h1></div>
                    <div ref={item1} className='theItem1'><h3>БОЛЕЕ</h3></div>
                    <div ref={item2img} className='theItem2Img'></div>
                    <div ref={item3} className='theItem3'><h3>ЛОКАЦИЙ</h3></div>


                    <div className="ynikMeh">
                        <div ref={ynika} className='ynika'><h3>УНИКА</h3></div>
                        <div ref={el} className='l'><h3>Л</h3></div>
                        <div ref={nie} className='nie'><h3>ЬНЫЕ</h3></div>
                        <div ref={item5} className='theItem5'><h3>ГОЛОВО ОМКИ</h3></div>
                    </div>

                    <div ref={ei} className='theItem6'><h3>И</h3></div>
                    <div ref={item7} className='theItem7'>
                        <div ref={gear2} className="gear gear2"></div> {/* <<< добавлено */}
                        <div className='itemMehText'><h3>МЕХАНИЗМЫ</h3></div>
                        <div ref={gear1} className="gear gear1"></div> {/* <<< добавлено */}
                    </div>
                </div>

            </div>
        </>
    );   
}
