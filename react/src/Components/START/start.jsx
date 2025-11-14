import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, use } from "react";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import React from 'react';
import './start.css'

export default function Start(){
    const containerStart = useRef(null)
    const title = useRef(null)
    const itemImg = useRef(null)
    const item1 = useRef(null)
    const item1n1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)
    const video = useRef(null)




useEffect(() => { 
        const startBy = gsap.timeline({
            scrollTrigger: {
                trigger: title.current,
                start: "top top",
                end: "5000 top",
                scrub: true,
                // pin: true,
                // markers: true
            }
        });
        startBy
        .fromTo(itemImg.current,{opacity:1, x:-300, y:320, duration:2, scale:0.5},{opacity:1, x:1600, y:320, duration:30,})


    
        const start = gsap.timeline({
            scrollTrigger: {
                trigger: containerStart.current,
                start: "top top",
                end: "5000 top",
                scrub: true,
                pin: true,
                // markers: true
            }
        });


        start
        .fromTo(title.current,{scale:0.5,  x:1200,}, {scale:1, x:900 ,color:'grey'})
        // .fromTo(item1.current,{opacity:0,y:500, x:1200,},{x:1100,y:350,opacity:1, scale:2, color:'grey',textShadow:'3px 3px 5px grey',duration:5},'> 1')
        .fromTo(item2.current,{opacity:0, x:-100, y:-100,},{x:400, y:-100, opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red'},'> 0.5')
            .to({},{duration:2})
        // .fromTo(item1n1.current,{opacity:0,x:100, y:350},{x:170,opacity:1, scale:2, color:'grey',textShadow:'3px 3px 5px grey',duration:5},'> 1')

        .fromTo(item3.current,{opacity:0, x:1400, y:50,},{x:600,y:100,opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red'},)
        .fromTo(item4.current,{opacity:0, x:400, y:-200, scale:0.3},{x:650, y:90,opacity:1, scale:6,duration:5,textShadow:'3px 3px 5px red',},)

            .to({},{duration:5})
        
        

        .fromTo(item5.current,{scale:15,rotationZ:'0deg', opacity:0, x:650, y:-100, },{opacity:1, scale:5,rotationZ:'40deg',duration:5, textShadow:'3px 3px 3px white'},'> 0.5')
        .to([item1.current, item2.current, item3.current, item4.current, item1n1.current], {textShadow:'4px 4px 6px white', color:'red'})

            .to({},{duration:4})
            .to([item4.current,item3.current,title.current, item1.current, item1n1.current,itemImg.current,item2.current], {opacity:0, duration:5},)
            .to({},{duration:5})
            .to(item5.current,{opacity:0, scale:10,rotationZ:'0deg', textShadow:'1px 1px 8px white',duration:5,})
            .to(video.current,{opacity:1})

            .to({},{duration:20})






        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            start.kill(), startBy.kill();

        };

    }, []);





    return(
        
        <>
            <div ref={containerStart} className="containerStart">
                <div  className="contBox1">
                    <div  className='video-container'>
                        <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="auto"
                        poster="poster.jpg"
                        className="wrapper-video"
                        ref={video}
                        >
                            <source className='video' src="SAWPC.mp4" type="video/mp4" />
                        </video>
                        <div ref={title} className='theTitle'><h1>ВАС ЖДЕТ</h1></div>
                        <div ref={item1} className='okak'><h3></h3></div>
                        <div ref={item1n1} className='okak'><h3></h3></div>
                        <div ref={item2} className='okak'><h3>ПОЛНОЕ</h3></div>
                        <div ref={item3} className='okak'><h3>ПОГРУЖЕНИЕ</h3></div>
                        <div ref={itemImg} className='okakImg'></div>
                        <div ref={item4} className='okak'><h3>В</h3></div>
                        <div ref={item5} className='okak'><h3>ИСТОРИЮ</h3></div>


                    </div>
                
                </div>
            </div>
        </>
    )
}